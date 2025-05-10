import { Link } from "react-router";
import useCart from "../../cart/providers/useCart";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cart, total } = useCart();
  const handleSubmit = () => {
    window.location.href = "/confirmation.html";
  };

  return (
    <div className="checkout-container">
      <h1>Podsumowanie zamówienia</h1>

      {cart.length === 0 ? (
        <p>Twój koszyk jest pusty.</p>
      ) : (
        <>
          <table className="order-summary-table">
            <thead>
              <tr>
                <th>Produkt</th>
                <th>Ilość</th>
                <th>Cena</th>
                <th>Suma</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const unit = item.price.main + item.price.fractional / 100;
                const subtotal = unit * item.quantity;
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{unit.toFixed(2)} zł</td>
                    <td>{subtotal.toFixed(2)} zł</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="items-total-price">
            Łączna kwota: {total.toFixed(2)} zł
          </div>
        </>
      )}

      <div className="actions">
        <Link to="/cart">
          <button className="btn">Powrót do koszyka</button>
        </Link>
        <button
          className="btn"
          onClick={handleSubmit}
          disabled={cart.length === 0}
        >
          Złóż zamówienie
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
