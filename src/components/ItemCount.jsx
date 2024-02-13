import { useState } from 'react';
import Swal from 'sweetalert2'

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
        <div className='flex flex-col bg-black justify-center h-24 w-52'>
            <div className='flex flex-row justify-center content-center'>
                <button className='text-xs text-center border rounded-md w-6 h-6' onClick={subtract}> - </button>
                <p className='text-base text-center w-9 h-9'>{qty}</p>
                <button className='text-xs text-center border rounded-md w-6 h-6' onClick={sum}> + </button>
            </div>
            <button className='bg-green-800 text-xs m-2 mx-12 p-1 px-6 border border-green-700 rounded-md lg:my-2 lg:mx-12 lg:px-6 lg:self-end' onClick={onAddHandler}> Add to cart </button>
        </div>
    );
  }
  
  export default ItemCount;