function ProductCard(props) {
  return (
    <div className="product-card">

      <img
        src={props.image}
        alt={props.name}
      />

      <h3>{props.name}</h3>

      <p>₹ {props.price}</p>

      <button>View Product</button>

    </div>
  );
}

export default ProductCard;