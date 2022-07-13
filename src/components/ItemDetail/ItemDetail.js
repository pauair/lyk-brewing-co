import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../CartContext/CartContext';
import './ItemDetail.css';

function ItemDetail(props) {

  const [endPurchase, setEndPurchase] = useState(false)

  const {addToCart} = useContext(CartContext)

  const onAdd = (count) => {
    setEndPurchase(true)
    addToCart(props, count)
  }

  return (
    <div className='cardBodyDetail'>
        <img className='cardImgDetail' src={require(`../../assets/${props.img}`)} alt={props.nombre}/>
        <h1 className='cardNameDetail'>{props.nombre}</h1>
        <p className='cardDescriptionDetail'>{props.descripcion}</p>
        <p className='cardSpecsDetail'>VOL.ALC: {props.volAlc} - AMARGOR: {props.amargor}</p>
        <p className='cardPriceDetail'>{props.precio} {props.moneda}</p>
        {!endPurchase && <div className='cardItemCount'> <ItemCount stock={props.stock} onAdd={onAdd}/> </div>}
        {endPurchase && <Link to='/cart'><button className='itemCountButtonAdd'>Terminar compra</button></Link>}
    </div>
  );
}

export default ItemDetail;