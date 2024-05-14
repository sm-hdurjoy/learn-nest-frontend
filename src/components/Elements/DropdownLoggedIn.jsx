// Library Imports
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Component/Pages imports
import { getUser, logout } from "../../services";

// Other Imports
import { toast } from "react-toastify";

export const DropdownLoggedIn = ({ setDropdown }) => {
  const navigate = useNavigate(); // using useNavigate hook to handle navigation
  const [user, setUser] = useState({}); // user state to display user information

  // using useEffect hook to fetch user data on page load
  useEffect(() => {
    // async function to fetch user data
    async function fetchData() {
      try {
        const data = await getUser(); // fetch user data
        data.email ? setUser(data) : handleLogout(); // set user if user data is available otherwise handle logout
      } catch (error) {
        // showing toast message when error occurs while fetching user data
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    }
    fetchData();
  }, []); //eslint-disable-line

  // function to handle logout
  function handleLogout() {
    logout();
    setDropdown(false);
    navigate("/");
  }

  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            to="/products"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setDropdown(false)}
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setDropdown(false)}
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <span
          onClick={handleLogout}
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Log out
        </span>
      </div>
    </div>
  );
};
