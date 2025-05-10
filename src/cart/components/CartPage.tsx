import { Link } from "react-router";
import useCart from "../providers/useCart";
import styles from './CartPage.module.css';

const CartPage = () => {
  const { cart, total, removeProduct, updateQuantity } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h1>Koszyk</h1>

      {cart.length === 0 ? (
      <p>Twój koszyk jest pusty.</p>
      ) : (
      <>
        <ul className={styles.cartList}>
        {cart.map(item => (
          <li key={item.id} className={styles.cartItem}>
          <div className={styles.cartItemDetails}>
          <span>{item.name}</span>
          <span>
            Cena: {item.price.main},{item.price.fractional.toString().padStart(2, '0')} zł
          </span>
          <span>
            Łącznie: {((item.price.main + item.price.fractional / 100) * item.quantity).toFixed(2)} zł
          </span>
          </div>
          <div className={styles.actions}>
          <span className={styles.cartQuantity}>
            Ilość:
            <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={e => updateQuantity({...item, quantity: Number(e.target.value)})}
            className={styles.quantityInput}
            />
          </span>
          <button
            onClick={() => removeProduct(item.id)}
            className={styles.removeBtn}
          >
            Usuń
          </button>
          </div>
          </li>
        ))}
        </ul>

        <h1 className='items-total-price'>Łączna kwota: {total.toFixed(2)} zł</h1>
      </>
      )}

      <div className="actions">
        <Link to="/">
          <button>Kontynuuj zakupy</button>
        </Link>
        <Link to="/checkout">
          <button>Przejdź do podsumowania</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;