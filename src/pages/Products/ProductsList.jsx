// Library Imports
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// Component Imports
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context/FilterContext";
import { getProductList } from "../../services";

export const ProductsList = () => {
  const [show, setShow] = useState(false); // State variable to control dropdown visibility

  const search = useLocation().search; // access query parameter of the current url
  const searchTerm = new URLSearchParams(search).get("q"); // constructor to parse the query string from the URL

  useTitle("Explore eBooks Collection"); // updating the title

  const { products, initialProductList } = useFilter(); // destructuring functions from filter context

  // useEffect hook to fetch product list
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm); // fetch product list
        initialProductList(data); // store response in initial product list
      } catch (error) {
        // if any error occurs, show using toast
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    }
    fetchProducts();
  }, [searchTerm]); //eslint-disable-line

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({products.length})
          </span>
          <span>
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
              onClick={() => setShow(!show)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};
