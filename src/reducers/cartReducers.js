// reducer function to manage the state of the shopping cart.
export const cartReducers = (state, action) => {
  const { type, payload } = action; // destructuring action to get type and payload

  // switch statement to handle the different types of actions
  switch (type) {
    case "ADD_TO_CART": // When adding a new product to the cart
      return { ...state, cartList: payload.products, total: payload.total };

    // when removing a product from the cart
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products, total: payload.total };

    // when deleting all product from the cart
    case "CLEAR_CART":
      return { ...state, cartList: payload.products, total: payload.total };

    default:
      throw new Error("No Case Found!");
  }
};
