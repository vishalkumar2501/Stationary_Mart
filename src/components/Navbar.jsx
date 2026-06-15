const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          Stationary Mart
        </h1>

        <div className="flex items-center gap-6">

          <ul className="hidden md:flex gap-8 font-medium">
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>

          <div className="relative">

            <span className="text-3xl">
              🛒
            </span>

            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;