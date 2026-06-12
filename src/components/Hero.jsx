const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-28 text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          Welcome To Stationary Mart
        </h1>

        <p className="mt-6 text-lg">
          Premium notebooks, pens, markers and
          office essentials at one place.
        </p>

        <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Shop Now
        </button>

      </div>

    </section>
  );
};

export default Hero;