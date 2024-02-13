import { useContext } from 'react';
import cartImg from '../assets/cartImg.png'
import { CartContext } from './CartContext';

function CartWidget() {

  const { totalQty } = useContext(CartContext)

  return (
    <div className='p-4 flex flex-col'>
      <p className='bg-white self-end text-black rounded-2xl text-xxs text-center size-3 lg:size-5 lg:text-sm lg:font-semibold lg:self-center lg:ml-6'>{totalQty()}</p>
      <img className='self-center size-5 lg:size-9' src={cartImg} alt="cart" />
    </div>
  );
}

export default CartWidget;