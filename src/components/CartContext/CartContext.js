import { createContext, useState } from "react";

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue = [], children}) => {

    const [Cart, setCart] = useState(defaultValue)

    const clearCart = () => {
        setCart([])
    }

    const addToCart = (item, qty) => {
        console.log(item)
        console.log(qty)
    }

    const context = {
        clearCart,
        addToCart
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}