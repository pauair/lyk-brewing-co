import './Item.css';

function Item(nombre, img, precio) {
  return (
    <div className='cardBody'>
        <img src={img} alt={nombre}/>
        <h3 className='cardName'>{nombre}</h3>
        <p className='cardInfo'>{precio}</p>
        <button className='cardButton'>Ver más</button>
    </div>
  );
}

export default Item;