// Library imports
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Component Imports
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]); // state variable to store productlist items

  // useEffect hook to fetch featured product list items from the API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList(); // fetch featured product list
        setProducts(data); // store featured product list items in the products state variable
      } catch (error) {
        // show toast error if there was an error fetching featured product list items
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
