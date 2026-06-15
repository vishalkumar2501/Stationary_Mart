const ProductCard = ({
  name,
  price,
  image,
  addToCart,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img
        src={image}
        alt={name}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {name}
        </h3>

        <p className="text-blue-600 font-semibold mt-2">
          ₹{price}
        </p>

        <button
          onClick={addToCart}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;