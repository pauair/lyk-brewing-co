import { createContext, useState } from "react";

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue)
    const [total, setTotal] = useState(0)

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

    const totalQty = () => {
        let quantity = 0
        cart.forEach((i) => (quantity += i.qty));
        return quantity
    }

    const totalPrice = () => {
        let total = 0
        cart.forEach((i) => (total = total + (i.item.precio)*(i.qty)))
        setTotal(total)
        return total
    }

    const context = {
        cart,
        total,
        clearCart,
        addToCart,
        removeFromCart,
        totalQty,
        totalPrice,
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}