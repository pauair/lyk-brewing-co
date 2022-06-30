import './Item.css';

function Item({nombre, img, precio, id, moneda}) {
  return (
    <div className='cardBody'>
        <img className='cardImg' src={require(`../assets/${img}`)} alt={nombre}/>
        <h1 className='cardName'>{nombre}</h1>
        <p className='cardPrice'>{precio} {moneda}</p>
        <button className='cardBtn' id={id}>Ver más</button>
    </div>
  );
}

export default Item;