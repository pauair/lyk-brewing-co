import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import loading from '../../assets/loading.png';
function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { cat } = useParams()

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
      }, 2000)
    }, [])

  console.log(cat)

  return (
    <div>
      {isLoading && <div className='container'><img src={loading} alt='loading' className='loadingImg'/> <p className='loading'> Loading... </p> </div>}
      <ItemList listaProd={productos}/>
    </div>
  );
}

export default ItemListContainer;