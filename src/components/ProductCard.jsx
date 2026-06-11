const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>

        <p className="text-blue-600 font-bold mt-2">
          ₹{price}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;