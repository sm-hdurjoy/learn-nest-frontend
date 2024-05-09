import { cartReducers } from "../reducers/cartReducers"

const { createContext, useContext, useReducer } = require("react")

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState)

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducers, cartInitialState)

    

    const value = {
        cartList: [],
        total: 0
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    return context
}