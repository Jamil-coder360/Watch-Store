import React, { useContext, useState } from "react";
import { Menu, ShoppingCart, Search, User, X, SunDimIcon, MoonIcon, MoonStarIcon, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const {theme , themeChange} = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const menuItem = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Mens", link: "mens" },
    { id: 4, name: "Women", link: "women" },
    { id: 5, name: "Contact", link: "contact" },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="w-full border-b bg-white/95 dark:bg-slate-900 backdrop-blur-sm sticky top-0 z-50 shadow-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer w-40 sm:w-50 z-50">
            <img src="./logo.svg" alt="logo" className="w-full" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center gap-8">
              {menuItem.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="relative text-gray-700 font-medium capitalize hover:text-black transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 sm:gap-4 z-50">
            <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition">
              <Search className="w-5 h-5 text-gray-700 dark:text-white " />
            </button>

            <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition">
              <User className="w-5 h-5 text-gray-700 dark:text-white " />
            </button>

            <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
              <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-white " />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <div className="relative items-center flex pr-4 lg:pr-0">

            <SunDimIcon  onClick={themeChange} className={` absolute text-center text-amber-300 ${theme === "light" ?"opacity-0":"opacity-100"}`} />
            <MoonIcon  onClick={themeChange} className={` absolute text-center ${theme === "dark" ?"opacity-0":"opacity-100"}`} />
            </div>


            {/* Mobile Menu Button */}
            <button
              onClick={handleOpen}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition"
            >
              {open ? (
                <X className="w-6 h-6 text-white relative z-50" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-screen w-full bg-slate-900/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
            open
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <ul className="flex flex-col items-start justify-center h-full gap-10 px-12">
            {menuItem.map((item) => (
              <li key={item.id} onClick={() => setOpen(false)}>
                <a
                  href={item.link}
                  className="text-3xl font-semibold text-white capitalize hover:text-lime-400 transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;