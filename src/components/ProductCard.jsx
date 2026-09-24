import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <Link className="listing-card" to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} />
      <div className="listing-info">
        <p className="listing-price">₱{product.price.toLocaleString()}</p>
        <p className="listing-name">{product.name}</p>
        <p className="listing-meta">{product.category}</p>
      </div>
    </Link>
  );
}
export default ProductCard;
