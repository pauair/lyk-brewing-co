import { useContext } from 'react';
import { CartContext } from './CartContext';

function CartItem(props) {

    const { removeFromCart } = useContext(CartContext)

    return (
        <div className='bg-black flex flex-col flex-wrap p-6 mb-2 border content-center border-gray-900 rounded-3xl min-w-full min-h-20 lg:flex-row lg:p-8 lg:mx-16 lg:my-6 lg:min-w-20'>
            <img className='justify-self-center self-center p-16 lg:w-64 lg:absolute' src={require(`../assets/${props.img}`)} alt={props.name} />
            <div className='flex flex-col content-center lg:justify-center lg:min-w-full'>
                <h1 className='uppercase text-center text-lg font-semibold lg:text-2xl'>{props.name}</h1>
                <p className='text-green-600 text-base font-semibold m-2 lg:text-lg'>{props.price} {props.currency}</p>
                <p className='text-white uppercase text-sm'>units: {props.qty}</p>
                <button className='text-gray-500 border border-gray-700 rounded-md p-2 text-xs self-end' onClick={() => removeFromCart(props.id)}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;