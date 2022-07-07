import { useState } from 'react';
import Swal from 'sweetalert2'
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {
    const [num, setNum] = useState(0)

    const suma = () => {
        if (num < stock) {
            setNum(num + 1)
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
        if (num > 0) {
            setNum(num - 1)
        } 
    }

    const addToCart = () => {
        if (num === 0 && stock === 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                text: `No hay unidades en stock por el momento`,
                showConfirmButton: false,
                timer: 1500
              })
        } else {
            if (num >0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    text: `Has agregado ${num} unidades al carrito`,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(`Se agregan ${num} unidades al carrito`)
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
            <p className='itemCountInput'>{num}</p>
            <button className='itemCountButton' onClick={suma}> + </button>
            <button className='itemCountButtonAdd' onClick={addToCart}> Agregar al carrito</button>
        </div>
    );
  }
  
  export default ItemCount;