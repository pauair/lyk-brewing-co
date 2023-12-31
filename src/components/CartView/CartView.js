import './CartView.css';
import CartItem from '../CartItem/CartItem';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom' ;
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
            {<h2 className='cart-view-title'> MY CART </h2>}
            {isCartEmpty && <p className='cart-view-empty'> Your cart is empty. Add products to see them here.</p>}
            {!isCartEmpty && cart.map((i) => <CartItem key={i.item.id} id={i.item.id} name={i.item.name} precio={i.item.name} moneda={i.item.name} img={i.item.img} qty={i.qty}/>)}
            {!isCartEmpty && <p className='cart-view-total'>TOTAL: {totalPrice()} UYU</p>}
            <div className='cart-view-div-btn'>
                {!isCartEmpty && <button className='cart-view-btn cart-view-clear-btn' onClick={clearCart}>Clear cart</button>}
                {!isCartEmpty && <Link to="/endPurchase"><button className='cart-view-btn'>End purchase</button></Link>}
            </div>
        </div>
    )
}

export default CartView;