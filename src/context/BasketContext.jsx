import React, { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import useIsOpen from '../hooks/useIsOpen'

export const BasketContext = createContext(null)

const initialState = {
    items: [],
    total: 0, 
    totalItem: 0,
    msg: ''
};

const BasketProvider = ({ children }) => {
    const { state, toggle:open } = useIsOpen()
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    return (
        <BasketContext.Provider value={{ cart, dispatch, state, open }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider