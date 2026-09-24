import { Link } from "react-router-dom";

function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link className="button" to="/">Shop Now</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h2>{item.name}</h2>
                  <p>Price: ₱{item.price.toFixed(2)}</p>
                  <p>Subtotal: ₱{(item.price * item.quantity).toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      disabled={item.quantity >= item.stock}
                    >
                      +
                    </button>
                    <button className="danger" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ₱{total.toFixed(2)}</h2>
            <Link className="button" to="/checkout">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;