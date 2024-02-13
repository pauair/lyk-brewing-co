import Item from './Item';

function ItemList({listProd}) {
  return (
    <div className='bg-black flex flex-wrap flex-col m-10 justify-center content-center lg:flex-row'>
      {listProd.map((p)=> <Item key={p.id} id={p.id} name={p.name} price={p.price} currency={p.currency} img={p.img}/>)}
    </div>
  );
}

export default ItemList;