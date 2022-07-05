import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';

function ItemDetail(props) {

  return (
    <div className='cardBodyDetail'>
        <img className='cardImgDetail' src={require(`../../assets/${props.img}`)} alt={props.nombre}/>
        <h1 className='cardNameDetail'>{props.nombre}</h1>
        <p className='cardDescriptionDetail'>{props.descripcion}</p>
        <p className='cardSpecsDetail'>VOL.ALC: {props.volAlc} - AMARGOR: {props.amargor}</p>
        <p className='cardPriceDetail'>{props.precio} {props.moneda}</p>
        <p className='cardItemCount'> <ItemCount stock={props.stock} /> </p>
    </div>
  );
}

export default ItemDetail;