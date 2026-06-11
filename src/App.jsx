import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      id: 1,
      name: "Notebook",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=500",
    },
    {
      id: 2,
      name: "Pen",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500",
    },
    {
      id: 3,
      name: "Marker",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Stationary Mart
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;