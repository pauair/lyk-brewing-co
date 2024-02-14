import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import loading from '../assets/loading.gif';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../services/FirebaseConfig';

function ItemDetailContainer() {

  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    setIsLoading(true)
    setTimeout(()=> {
      getAllProducts().then((data) => setProduct((data).filter((i) => (i.id === id))))
      setIsLoading(false)
    }, 500)
  }, [id])

  return (
    <div className='bg-pages flex flex-wrap justify-center min-h-screen'>
        {isLoading && <div className='bg-black flex flex-col justify-center z-2 h-screen'><img src={loading} alt='loading' className='self-center w-16 m-4'/> <p className='self-center w-16 m-4'> Loading... </p> </div>}
        {product && product.map((p)=> <ItemDetail key={p.id} id={p.id} name={p.name} price={p.price} currency={p.currency} img={p.img} abv={p.abv} ibu={p.ibu} description={p.description} stock={p.stock} />)}
      </div>
  );
}

export default ItemDetailContainer;