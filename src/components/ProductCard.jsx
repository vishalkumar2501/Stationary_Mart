const categories = [
  "All",
  "Notebook",
  "Pen",
  "Marker",
  "Pencil",
];
const products = [
  {
    id: 1,
    name: "Notebook",
    price: 120,
    category: "Notebook",
    image:
      "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=600",
  },

  {
    id: 2,
    name: "Pen",
    price: 25,
    category: "Pen",
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600",
  },

  {
    id: 3,
    name: "Marker",
    price: 45,
    category: "Marker",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600",
  },

  {
    id: 4,
    name: "Pencil",
    price: 15,
    category: "Pencil",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600",
  },
];
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