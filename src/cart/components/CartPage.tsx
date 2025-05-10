import { Link } from "react-router";
import useCart from "../providers/useCart";
import './CartPage.css';

const CartPage = () => {
  const { cart, total, removeProduct, updateQuantity } = useCart();

  return (
    <div className="cart-container">
      <h1>Koszyk</h1>

      {cart.length === 0 ? (
        <p>Twój koszyk jest pusty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                <span className="">{item.name}</span>
                <span className="">
                  Cena: {item.price.main},{item.price.fractional.toString().padStart(2, '0')} zł
                </span>
                <span className="">
                  Łącznie: {((item.price.main + item.price.fractional / 100) * item.quantity).toFixed(2)} zł
                </span>
                </div>
                <div className="actions">
                <span className="cart-quantity">
                  Ilość:
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={e => updateQuantity({...item, quantity: Number(e.target.value)})}
                    className="quantity-input"
                  />
                </span>
                <button
                  onClick={() => removeProduct(item.id)}
                  className="remove-btn"
                >
                  Usuń
                </button>
                </div>
              </li>
            ))}
          </ul>

          <h1 className="items-total-price">Łączna kwota: {total.toFixed(2)} zł</h1>
        </>
      )}

      <div className="actions">
        <Link to="/">
          <button className="btn">Kontynuuj zakupy</button>
        </Link>
        <Link to="/checkout">
          <button className="btn">Przejdź do podsumowania</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;