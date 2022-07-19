import './CartView.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';

function CartView() {

    const { totalQty, cart } = useContext(CartContext)
    const [isCartEmpty, setIsCartEmpty] = useState(false)

    useEffect(()=> {
        const qty = totalQty()
        if (qty === 0) {
            setIsCartEmpty(true)
        }
    }, [totalQty])

    return (
        <div className="cart-view">
            {isCartEmpty && <p> CARRITO </p>}
            {isCartEmpty && <p> Tu carrito está vacio. Agrega productos para verlos aquí. </p>}
            {!isCartEmpty && cart.forEach((i) => {
                {console.log(i.item.nombre)}
                <div className='container'>
                    <h2>{i.item.nombre}</h2>
                    <h2>{i.qty}</h2>
                </div>
                })
            }
        </div>
    )
}

export default CartView;