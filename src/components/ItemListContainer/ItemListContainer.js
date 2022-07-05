import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer() {

  const [productos, setProductos] = useState([])

  useEffect(()=> {
    setTimeout(()=>{
      fetch('productos.json')
      .then((resp) => resp.json())
      .then((data) => setProductos(data))
    }, 2000)
  }, [])

  return (
    <div>
      <h3 className="container">NUESTROS PRODUCTOS</h3>
      <ItemList listaProd={productos}/>
    </div>
  );
}

export default ItemListContainer;