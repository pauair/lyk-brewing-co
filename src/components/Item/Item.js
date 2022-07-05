//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import './Item.css';

function Item(props) {

  const pressCardBtn = () => {
    //ItemDetailContainer(props.nombre)
    console.log(`${props.nombre}`)
  }

  return (
    <div className='cardBody'>
        <img className='cardImg' src={require(`../../assets/${props.img}`)} alt={props.nombre}/>
        <h1 className='cardName'>{props.nombre}</h1>
        <p className='cardPrice'>{props.precio} {props.moneda}</p>
        <button className='cardBtn' id={props.id} onClick={pressCardBtn}>Ver más</button>
    </div>
  );
}

export default Item;