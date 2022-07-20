import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './CartItem.css';

function CartItem(props) {

    const { removeFromCart } = useContext(CartContext)
    
    return (
        <div className='cart-item-body'>
            <img className='cart-item-img' src={require(`../../assets/${props.img}`)} alt={props.nombre} />
            <h1 className='cart-item-name'>{props.nombre}</h1>
            <p className='cart-item-specs'>{props.precio} {props.moneda}</p>
            <p className='cart-item-specs'>Unidades: {props.qty}</p>
            <button className='cart-item-btn' onClick={() => removeFromCart(props.id)}>Quitar</button>
        </div>
    );
}

export default CartItem;