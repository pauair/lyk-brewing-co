import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';

function ItemDetail(props) {

 const [showItemCount, setShowItemCount] = useState(true)

  return (
    <div className='cardBodyDetail'>
        <img className='cardImgDetail' src={require(`../../assets/${props.img}`)} alt={props.nombre}/>
        <h1 className='cardNameDetail'>{props.nombre}</h1>
        <p className='cardDescriptionDetail'>{props.descripcion}</p>
        <p className='cardSpecsDetail'>VOL.ALC: {props.volAlc} - AMARGOR: {props.amargor}</p>
        <p className='cardPriceDetail'>{props.precio} {props.moneda}</p>
        {showItemCount && <div className='cardItemCount'> <ItemCount stock={props.stock} /> </div>}
        {!showItemCount && <Link to='/cart'><button className='itemCountButtonAdd'>Terminar compra</button></Link>}
    </div>
  );
}

export default ItemDetail;