import { createContext, useState } from "react";

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue)

    const clearCart = () => {
        setCart([])
    }

    const addToCart = (item, qty) => {
        if (isInCart(item.id)) {
            const newCart = [...cart]
            for (const i of newCart) {
                if (i.item.id === item.id) {
                    i.qty = i.qty + qty
                }
            }
            setCart(newCart)
        } else {
            setCart([...cart, {item: item, qty: qty}])
        }   
    }

    const isInCart = (id) => {
        return (cart.some((i) => i.item.id === id))
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter((i) => i.item.id !== id)
        setCart(newCart)
    }

    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}