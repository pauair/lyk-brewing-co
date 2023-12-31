import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {

  return (
    <div className='cardBody'>
        <img className='cardImg' src={require(`../../assets/${props.img}`)} alt={props.name}/>
        <h1 className='cardName'>{props.name}</h1>
        <p className='cardPrice'>{props.price} {props.currency}</p>
        <Link to={`/products/${props.id}`}> <button className='cardBtn'>See more</button> </Link>
    </div>
  );
}

export default Item;