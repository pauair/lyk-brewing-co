import Item from './Item';
import './Item.css';

function ItemList(listaProd) {
  return (
    <div className='container'>
      {listaProd.map((p)=> <Item nombre={p.nombre} precio={p.precio} img={p.img} /> )}
    </div>
  );
}

export default ItemList;