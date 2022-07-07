import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import loading from '../../assets/loading.png';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

  const { id } = useParams()
  const [producto, setProducto] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    setIsLoading(true)
    setTimeout(()=> {
      fetch('../productos.json')
      .then((resp) => resp.json())
      .then((data) => setProducto(data.filter((i) => (i.id === id))))
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className='container'>
      {isLoading && <div className='container'><img src={loading} alt='loading' className='loadingImg'/> <p className='loading'> Loading... </p> </div>}
      {producto && producto.map((p)=> <ItemDetail key={p.id} id={p.id} nombre={p.nombre} precio={p.precio} moneda={p.moneda} img={p.img} volAlc={p.volAlc} amargor={p.amargor} descripcion={p.descripcion} stock={p.stock} />)}
    </div>
  );
}

export default ItemDetailContainer;