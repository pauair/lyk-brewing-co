import { Link } from 'react-router-dom';

function Item(props) {

  return (
    <div className='bg-black float-left p-12 m-4 border rounded-2xl justify-center text-center content-center'>
        <img className='mx-9 mb-2 w-28 h-28 justify-center' src={require(`../assets/${props.img}`)} alt={props.name}/>
        <h1 className='uppercase text-lg font-bold'>{props.name}</h1>
        <p className='uppercase text-sm my-2'>{props.price} {props.currency}</p>
        <Link to={`/products/${props.id}`}> <button className='bg-gray-800 text-xs my-2 mx-6 py-2 px-7 border border-gray-700 rounded-md lg:m-4 lg:mx-10 lg:px-6 lg:self-end'>See more</button> </Link>
    </div>
  );
}

export default Item;