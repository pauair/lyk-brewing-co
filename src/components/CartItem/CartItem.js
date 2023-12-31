import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './CartItem.css';

function CartItem(props) {

    const { removeFromCart } = useContext(CartContext)
    
    return (
        <div className='cart-item-body'>
            <img className='cart-item-img' src={require(`../../assets/${props.img}`)} alt={props.name} />
            <h1 className='cart-item-name'>{props.name}</h1>
            <p className='cart-item-specs'>{props.price} {props.currency}</p>
            <p className='cart-item-specs'>Units: {props.qty}</p>
            <button className='cart-item-btn' onClick={() => removeFromCart(props.id)}>Remove</button>
        </div>
    );
}

export default CartItem;