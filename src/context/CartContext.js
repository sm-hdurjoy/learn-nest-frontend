// Reducer component import
import { createContext, useContext, useReducer } from "react"
import { cartReducers } from "../reducers/cartReducers";

// initializing initial state
const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState); // create context with cart initial state

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, cartInitialState); // use reducer hook to manage state and dispatch for cart

  // add to cart function to add products to cart
  function addToCart(product) {
    const updatedList = state.cartList.concat(product); // adding products to cartList
    const updatedTotal = state.total + product.price; // updating total price of products in cart
    // dispatching action to update cart state after adding products
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  // remove from cart function to remove products from cart
  function removeFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id); // filtering which product to remove
    const updatedTotal = state.total - product.price; // adjusting product total price after removing a product

    // dispatching action to update cart state after removing a products
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  // clear cart function to remove all products from cart
  function clearCart() {
    // dispatching action to update cart state after removing all products from cart
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }

  // creating value object to export
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// useCart hook to use CartContext functions
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
