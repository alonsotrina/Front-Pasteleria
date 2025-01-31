import { createContext, useContext, useState } from "react";

export const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider