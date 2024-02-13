import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { getAllProducts } from '../services/FirebaseConfig.js'
import ItemList from './ItemList.jsx';
import loading from '../assets/loading.gif';

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
          {isLoading && <div className='bg-black flex flex-col justify-center min-h-screen z-2'><img src={loading} alt='loading' className='self-center w-16 m-4'/> <p className='text-center uppercase text-lg'> Loading... </p> </div>}
          <ItemList listProd={products}/>
      </div>
  );
}

export default ItemListContainer;