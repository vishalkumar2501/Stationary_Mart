const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
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

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;