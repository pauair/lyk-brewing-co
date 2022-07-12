import { useState } from 'react';
import Swal from 'sweetalert2'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemCount.css';

function ItemCount({stock}) {

    const [qty, setQty] = useState(0)

    const suma = () => {
        if (qty < stock) {
            setQty(qty + 1)
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                text: `Quedan ${stock} unidades en stock.`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    const resta = () => {
        if (qty > 0) {
            setQty(qty - 1)
        } 
    }

    const onAddHandler = () => {
        if (qty === 0 && stock === 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                text: `No hay unidades en stock por el momento`,
                showConfirmButton: false,
                timer: 1500
              })
        } else {
            if (qty >0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    text: `Has agregado ${qty} unidades al carrito`,
                    showConfirmButton: false,
                    timer: 1500
                })

            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    text: `Debes elegir la cantidad de unidades`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }

    return (
        <div className='itemCount'>
            <button className='itemCountButton' onClick={resta}> - </button>
            <p className='itemCountInput'>{qty}</p>
            <button className='itemCountButton' onClick={suma}> + </button>
            <button className='itemCountButtonAdd' onClick={onAddHandler}> Agregar al carrito </button>
        </div>
    );
  }
  
  export default ItemCount;