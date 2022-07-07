import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {

  return (
    <div className='cardBody'>
        <img className='cardImg' src={require(`../../assets/${props.img}`)} alt={props.nombre}/>
        <h1 className='cardName'>{props.nombre}</h1>
        <p className='cardPrice'>{props.precio} {props.moneda}</p>
        <Link to={`/products/${props.id}`}> <button className='cardBtn'>Ver más</button> </Link>
    </div>
  );
}

export default Item;