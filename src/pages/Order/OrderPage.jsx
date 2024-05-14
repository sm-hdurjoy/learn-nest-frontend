// Library imports
import { useLocation } from "react-router-dom";

// Component Imports
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useTitle } from "../../hooks/useTitle";

export const OrderPage = () => {
  useTitle("Order Summary"); // updating the title
  const { state } = useLocation(); 

  return <main>{state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}</main>;
};
