import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function App() {

  return (
    <>
      <Navbar />

      <Hero />

      <section className="products">

        <h2>Our Products</h2>

        <div className="product-container">

          <ProductCard
            name="Notebook"
            price="120"
            image="https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=500"
          />

          <ProductCard
            name="Pen"
            price="25"
            image="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500"
          />

          <ProductCard
            name="Pencil"
            price="10"
            image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500"
          />

          <ProductCard
            name="Marker"
            price="45"
            image="https://images.unsplash.com/photo-1517842645767-c639042777db?w=500"
          />

        </div>

      </section>

      <Footer />
    </>
  );
}

export default App;
