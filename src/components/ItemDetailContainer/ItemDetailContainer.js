import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const [producto, setProducto] = useState()

  useEffect(()=> {
    setTimeout(()=>{
      fetch('productos.json')
      .then((resp) => resp.json())
      .then((data) => setProducto(data.filter((i) => (i.nombre) === "Cerveza Red")))
    }, 2000)
  }, [])

//
  return (
    <div className='container'>
       {producto && producto.map((p)=> <ItemDetail key={p.id} id={p.id} nombre={p.nombre} precio={p.precio} moneda={p.moneda} img={p.img} volAlc={p.volAlc} amargor={p.amargor} descripcion={p.descripcion} stock={p.stock} />)}
    </div>
  );
}

export default ItemDetailContainer;