import './CartView.css';
import CartItem from '../CartItem/CartItem';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';

function CartView() {

    const { totalQty, totalPrice, cart, clearCart } = useContext(CartContext)
    const [isCartEmpty, setIsCartEmpty] = useState(false)

    useEffect(()=> {
        const qty = totalQty()
        if (qty === 0) {
            setIsCartEmpty(true)
        }
    }, [totalQty])

    return (
        <div className="cart-view-body">
            {<h2 className='cart-view-title'> MI CARRITO </h2>}
            {isCartEmpty && <p> Tu carrito está vacio. Agrega productos para verlos aquí.</p>}
            {!isCartEmpty && cart.map((i) => <CartItem key={i.item.id} id={i.item.id} nombre={i.item.nombre} precio={i.item.precio} moneda={i.item.moneda} img={i.item.img} qty={i.qty}/>)}
            {!isCartEmpty && <p className='cart-view-total'>TOTAL: {totalPrice()} UYU</p>}
            {!isCartEmpty && <button className='cart-view-btn' onClick={clearCart}>Vaciar carrito</button>}
        </div>
    )
}

export default CartView;