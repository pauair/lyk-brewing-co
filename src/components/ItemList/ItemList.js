import Item from '../Item/Item';
import './ItemList.css';

function ItemList({listaProd}) {
  return (
    <div className='container'>
      {listaProd.map((p)=> <Item key={p.id} nombre={p.nombre} precio={p.precio} moneda={p.moneda} img={p.img}/>)}
    </div>
  );
}

export default ItemList;