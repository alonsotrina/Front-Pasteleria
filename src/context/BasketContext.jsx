import React, { createContext, useEffect, useReducer } from "react";
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
    const { state, toggle: open } = useIsOpen()
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    // localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            dispatch({
                type: "SET_CART",
                payload: JSON.parse(savedCart),
            });
        }
    }, []);

    // Guardar el carrito en localStorage cada vez que cambie el estado
    useEffect(() => {
        if (cart.items.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.removeItem('cart');
        }
    }, [cart]);

    return (
        <BasketContext.Provider value={{ cart, dispatch, state, open }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider