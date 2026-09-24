import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <header className="topbar">
      <Link className="brand" to="/"><span className="brand-icon"></span> The 2nd Market</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart <span className="badge">{cartCount}</span></Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}
export default Navbar;
