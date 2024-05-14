// reducer function to manage the state of the filter.
export const filterReducer = (state, action) => {
  const { type, payload } = action; // destructuring action to get type and payload

  // switch statement to handle the different types of actions
  switch (type) {
    // all product list action
    case "PRODUCT_LIST":
      return { productList: payload.products };

    // sort by action
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };

    // ratings action
    case "RATINGS":
      return { ...state, ratings: payload.ratings };

    // best seller only action
    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };

    // only in stock action
    case "ONLY_IN_STOCK":
      return { ...state, onlyInStock: payload.onlyInStock };

    // Clear filter action
    case "CLEAR_FILTER":
      return {
        ...state,
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        ratings: null,
      };

    default:
      throw new Error("No Cae Found!");
  }
};
