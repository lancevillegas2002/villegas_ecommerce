import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  paymentMethod: "Cash on Delivery"
};

function Checkout({ cart, clearCart }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function validate() {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    const digitsOnly = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (digitsOnly.length < 10 || digitsOnly.length > 11) {
      nextErrors.phone = "Phone number must contain 10 to 11 digits.";
    }

    if (!form.address.trim()) {
      nextErrors.address = "Delivery address is required.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // This order object exists only in memory. It is not sent to a server.
    const order = {
      customer: { ...form },
      items: cart.map((item) => ({ ...item })),
      total
    };

    console.log("Order created in memory:", order);
    setErrors({});
    clearCart();
    navigate("/success");
  }

  if (cart.length === 0) {
    return (
      <main className="container">
        <h1>Checkout</h1>
        <p>Your cart is empty. Add products before checking out.</p>
        <Link className="button" to="/">Go to Products</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Checkout</h1>
      <p className="checkout-total">Order Total: ₱{total.toFixed(2)}</p>

      <form className="checkout-form" onSubmit={handleSubmit} noValidate>
        <label>
          Full Name
          <input name="fullName" value={form.fullName} onChange={handleChange} />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </label>

        <label>
          Email Address
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Phone Number
          <input name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>
          Delivery Address
          <textarea name="address" rows="4" value={form.address} onChange={handleChange} />
          {errors.address && <span className="error">{errors.address}</span>}
        </label>

        <label>
          Payment Method
          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
            <option>Cash on Delivery</option>
          </select>
        </label>

        <button type="submit">Place Order</button>
      </form>
    </main>
  );
}

export default Checkout;