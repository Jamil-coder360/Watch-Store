import React from "react";
import { Menu, ShoppingCart, Search, User } from "lucide-react";

const Header = () => {
  const menuItem = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Mens", link: "/mens" },
    { id: 4, name: "Women", link: "/women" },
    { id: 5, name: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-xl">
      <nav className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer w-50">
            <img src="./logo.svg" alt="logo" className="w-full"/>
           
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center gap-8">
              {menuItem.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="relative text-gray-700 font-medium capitalize hover:text-black transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition">
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition">
              <User className="w-5 h-5 text-gray-700" />
            </button>

            <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile Menu */}
            <button className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
