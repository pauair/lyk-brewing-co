import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { getAllProducts } from '../../services/FirebaseConfig.js'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import loading from '../../assets/loading.gif';

function ItemListContainer() {

  const { cat } = useParams()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
        setIsLoading(true)
        setTimeout(()=> {
          if (cat === "all") {
            getAllProducts().then((data) => setProducts(data))
          } else {
            getAllProducts().then((data) => setProducts(data.filter((i) => (i.category === cat))))
          }
          setIsLoading(false)
        }, 500)
    }, [cat])

  return (
    <div>
      {isLoading && <div className='container'><img src={loading} alt='loading' className='loadingImg'/> <p className='loading'> Loading... </p> </div>}
      <ItemList listProd={products}/>
    </div>
  );
}

export default ItemListContainer;