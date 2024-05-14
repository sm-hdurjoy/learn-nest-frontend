// Library Imports
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Component Imports
import { Search } from "../Sections/Search";
import { DropdownLoggedOut, DropdownLoggedIn } from "../index";
import { useCart } from "../../context";

// Asset Imports
import Logo from "../../assets/logo.png";

export const Header = () => {
  // darkMode state variable to set the theme color
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [searchSection, setSearchSection] = useState(false); // state variable to set the search section visibility

  const [dropdown, setDropdown] = useState(false); // state variable to set the dropdown visibility

  const token = JSON.parse(sessionStorage.getItem("token")); // getting user token from session storage

  // useEffect hook to set the theme color on page load
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const { cartList } = useCart(); // using cartList from CartContext to show how many items are in the header cart icon

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="Learn Nest Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Learn Nest
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
              onClick={() => setDarkMode(!darkMode)}
            ></span>
            <span
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
              onClick={() => setSearchSection(!searchSection)}
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            {dropdown &&
              (token ? (
                <DropdownLoggedIn setDropdown={setDropdown} />
              ) : (
                <DropdownLoggedOut setDropdown={setDropdown} />
              ))}
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  );
};
