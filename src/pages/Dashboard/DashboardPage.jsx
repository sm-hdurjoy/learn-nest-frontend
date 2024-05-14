// Library Imports
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Component Imports
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]); // state variable to store order information
  useTitle("Dashboard"); // set title for dashboard page

  // useEffect to fetch order information of users to display
  useEffect(() => {
    // async function to fetch order information
    async function fetchOrders() {
      try {
        const data = await getUserOrders(); // fetch order information
        setOrders(data); // set order information to state variable
      } catch (error) {
        // if error occurs, display error message to user as toast
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {orders.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>

      <section>{!orders.length && <DashboardEmpty />}</section>
    </main>
  );
};
