import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

function App() {

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const products = [
    {
      id: 1,
      name: "Notebook",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=600",
    },

    {
      id: 2,
      name: "Pen",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600",
    },

    {
      id: 3,
      name: "Marker",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600",
    },

    {
      id: 4,
      name: "Pencil",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600",
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen">

      <Navbar cartCount={cartCount} />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              addToCart={addToCart}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default App;