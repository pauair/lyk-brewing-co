import { useState } from 'react';
import Swal from 'sweetalert2'
import './ItemCount.css';

function ItemCount({stock, onAdd}) {

    const [qty, setQty] = useState(0)

    const sum = () => {
        if (qty < stock) {
            setQty(qty + 1)
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                background: '#101000',
                color: '#ffffff',
                text: `Remaining stock: ${stock} units`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    const subtract = () => {
        if (qty > 0) {
            setQty(qty - 1)
        } 
    }

    const onAddHandler = () => {
        if (qty === 0 && stock === 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                background: '#101000',
                color: '#ffffff',
                text: `Currently no stock available`,
                showConfirmButton: false,
                timer: 1500
              })
        } else {
            if (qty >0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    background: '#101000',
                    color: '#ffffff',
                    text: `You have added ${qty} units to the cart`,
                    showConfirmButton: false,
                    timer: 1500
                })
                onAdd(qty)

            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    background: '#101000',
                    color: '#ffffff',
                    text: `You must choose the quantity of units`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }

    return (
        <div className='itemCount'>
            <button className='itemCountButton' onClick={subtract}> - </button>
            <p className='itemCountInput'>{qty}</p>
            <button className='itemCountButton' onClick={sum}> + </button>
            <button className='itemCountButtonAdd' onClick={onAddHandler}> Add to cart </button>
        </div>
    );
  }
  
  export default ItemCount;