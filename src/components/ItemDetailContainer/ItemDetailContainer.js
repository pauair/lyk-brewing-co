import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import loading from '../../assets/loading.gif';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../services/FirebaseConfig';
import Footer from '../Footer/Footer';

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
  }, [])

  return (
    <>
      <div className='item-detail-container'>
        {isLoading && <div className='container'><img src={loading} alt='loading' className='loadingImg'/> <p className='loading'> Loading... </p> </div>}
        {product && product.map((p)=> <ItemDetail key={p.id} id={p.id} name={p.name} price={p.price} currency={p.currency} img={p.img} abv={p.abv} ibu={p.ibu} description={p.description} stock={p.stock} />)}
      </div>
      <Footer/>
    </>
  );
}

export default ItemDetailContainer;