import CartItem from './CartItem';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom' ;
import { CartContext } from './CartContext';

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
        <div className='flex flex-col py-8 px-8 text-center justify-items-center content-center bg-black min-h-screen'>
            {<h2 className='text-white font-bold text-2xl p-6 text-center lg:text-3xl'> MY CART </h2>}
            {isCartEmpty && <p className='text-white text-center py-16 font-bold justify-self-center h-screen'> Your cart is empty. <br/> Add products to see them here.</p>}
            {!isCartEmpty && cart.map((i) => <CartItem key={i.item.id} id={i.item.id} name={i.item.name} price={i.item.price} currency={i.item.currency} img={i.item.img} qty={i.qty}/>)}
            <div className='bg-black pt-9'>
                {!isCartEmpty && <p className=' bg-black text-white text-sm font-semibold border-double border border-green-900 rounded-md my-6 mx-8 p-3 lg:p-2 lg:mx-96 lg:text-lg'>TOTAL: {totalPrice()} UYU</p>}
                {!isCartEmpty && <button className='bg-black border-gray-600 text-gray-400 text-xs m-2 p-2 border rounded-md lg:m-4 lg:p-3' onClick={clearCart}>Clear cart</button>}
                {!isCartEmpty && <Link to="/endPurchase"><button className='bg-green-800 text-xs m-2 p-2 border border-green-00 rounded-md lg:m-4 lg:p-3'>End purchase</button></Link>}
            </div>
        </div>
    )
}

export default CartView;