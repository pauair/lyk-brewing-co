import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import loading from '../../assets/loading.png';
import './ItemListContainer.css';

function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    setIsLoading(true)
    setTimeout(()=>{
      fetch('productos.json')
      .then((resp) => resp.json())
      .then((data) => setProductos(data))
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {isLoading && <div className='container'><img src={loading} alt='loading' className='loadingImg'/> <p className='loading'> Loading... </p> </div>}
      <ItemList listaProd={productos}/>
    </div>
  );
}

export default ItemListContainer;