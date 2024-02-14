import { useContext } from 'react';
import cartImg from '../assets/cartImg.webp'
import { CartContext } from './CartContext';

function CartWidget() {

  const { totalQty } = useContext(CartContext)

  return (
    <div className='flex justify-end content-start ml-7 lg:ml-2'>
      {<img className='absolute size-5 lg:size-8' src={cartImg} alt="cart"/>}
      <p className='bg-red-900 z-10 text-white rounded-2xl px-1 text-xxs text-center self-end lg:text-sm lg:font-semibold'>{totalQty()}</p>
    </div>
  );
}

export default CartWidget;