import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { CartContext } from './CartContext';

function ItemDetail(props) {

  const [endPurchase, setEndPurchase] = useState(false)
  const { addToCart } = useContext(CartContext)

  const onAdd = (count) => {
    setEndPurchase(true)
    addToCart(props, count)
  }

  return (
    <div className='animate__animated animate__fadeIn bg-black flex flex-col lg:border lg:rounded-md mx-2 my-0 p-4 justify-center lg:flex-row lg:my-14 lg:mx-64'>
      <img className='flex border rounded-lg py-6 px-12 mx-8 lg:h-60 lg:ml-32 lg:mt-24' src={require(`../assets/${props.img}`)} alt={props.name} />
      <div className='lg:self-center lg:m-8 lg:pr-16 '>
        <h1 className='uppercase text-center text-xl p-2 font-semibold lg:text-2xl lg:m-4'>{props.name}</h1>
        <p className='text-center text-sm italic p-4 lg:p-4 lg:ml-6'>{props.description}</p>
        <p className='text-center text-sm pb-4'>ABV: {props.abv} - IBU: {props.ibu}</p>
        <p className='text-center text-md p-1 mb-4 mx-32 font-semibold bg-white rounded-sm text-black lg:my-2 lg:mx-20 lg:px-12'>${props.price}</p>
        {!endPurchase && <div className='flex flex-row justify-center content-center'> <ItemCount stock={props.stock} onAdd={onAdd} /> </div>}
        {endPurchase && <Link to='/cart'><button className='bg-green-800 text-xs my-2 mx-28 py-2 px-7 border border-green-700 rounded-md lg:m-4 lg:mx-20 lg:px-18 lg:self-end'>End purchase</button></Link>}
      </div>
    </div>
  );
}

export default ItemDetail;