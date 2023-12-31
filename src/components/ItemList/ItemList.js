import Item from '../Item/Item';
import './ItemList.css';

function ItemList({listProd}) {
  return (
    <div className='container'>
      {listProd.map((p)=> <Item key={p.id} id={p.id} name={p.name} price={p.price} currency={p.currency} img={p.img}/>)}
    </div>
  );
}

export default ItemList;