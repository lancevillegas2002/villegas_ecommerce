import { Link } from "react-router-dom";

function Success() {
  return (
    <main className="container center">
      <h1>Order Placed!</h1>
      <p>Thank you. Your sample order was created successfully.</p>
      <p>This demo does not save orders after the page is refreshed.</p>
      <Link className="button" to="/">Back to Home</Link>
    </main>
  );
}

export default Success;