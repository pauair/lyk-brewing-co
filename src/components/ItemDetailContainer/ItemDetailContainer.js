import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import loading from '../../assets/loading.gif';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../services/FirebaseConfig';
import Footer from '../Footer/Footer';

function ItemDetailContainer() {

  const { id } = useParams()
  const [producto, setProducto] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    setIsLoading(true)
    setTimeout(()=> {
      getAllProducts().then((data) => setProducto((data).filter((i) => (i.id === id))))
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <>
      <div className='item-detail-container'>
        {isLoading && <div className='container'><img src={loading} alt='loading' className='loadingImg'/> <p className='loading'> Loading... </p> </div>}
        {producto && producto.map((p)=> <ItemDetail key={p.id} id={p.id} nombre={p.nombre} precio={p.precio} moneda={p.moneda} img={p.img} volAlc={p.volAlc} amargor={p.amargor} descripcion={p.descripcion} stock={p.stock} />)}
      </div>
      <Footer/>
    </>
  );
}

export default ItemDetailContainer;