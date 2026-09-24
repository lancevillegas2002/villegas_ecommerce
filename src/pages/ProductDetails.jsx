import { Link, useParams } from "react-router-dom";

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="page-container">
        <h1>Product not found</h1>
      </main>
    );
  }

  return (
    <main className="page-container">
      <Link className="back-link" to="/">
        ← Back to Marketplace
      </Link>

      <div className="details">
        <div className="details-photo">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <section className="details-panel">
          <h1>{product.name}</h1>

          <p className="details-price">
            ₱{product.price.toLocaleString()}
          </p>

          <p className="muted">
            {product.category}
          </p>

          <hr />

          <h3>Details</h3>

          <p>
            <strong>Stock:</strong>{" "}
            {product.stock} available
          </p>

          <h3>Description</h3>

          <p>{product.description}</p>

          <button
            className="primary full"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <Link
            className="secondary full"
            to="/cart"
          >
            View Cart
          </Link>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;