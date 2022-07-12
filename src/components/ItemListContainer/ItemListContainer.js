import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import loading from '../../assets/loading.png';

function ItemListContainer() {

  const { cat } = useParams()
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
      setIsLoading(true)
      setTimeout(()=> {
        if (cat === "all") {
          fetch('../../productos.json')
          .then((resp) => resp.json())
          .then((data) => setProductos(data))
        } else {
          fetch('../../productos.json')
          .then((resp) => resp.json())
          .then((data) => setProductos(data.filter((i) => (i.categoria === cat))))
        }
        setIsLoading(false)
      }, 1000)
  }, [cat])

  return (
    <div>
      {isLoading && <div className='container'><img src={loading} alt='loading' className='loadingImg'/> <p className='loading'> Loading... </p> </div>}
      <ItemList listaProd={productos}/>
    </div>
  );
}

export default ItemListContainer;