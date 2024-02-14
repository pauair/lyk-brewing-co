import { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/FirebaseConfig"
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

function EndPurchase() {

    let navigate = useNavigate()
    const { total, cart, clearCart } = useContext(CartContext)

    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [orderId, setOrderId] = useState('')

    const nameHandler = (event) => {
        setNewName(event.target.value)
    }

    const phoneHandler = (event) => {
        setNewPhone(event.target.value)
    }

    const emailHandler = (event) => {
        setNewEmail(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const ordersCollections = collection(db, 'orders')
        const newBuyer = {
            name: newName,
            phone: newPhone,
            email: newEmail
        }
        const order = {
            buyer: newBuyer,
            total: total,
            items: JSON.stringify(cart),
            date: Date(),
        }
        if (newName && newPhone && newEmail) {
            console.log(newName);
            console.log(newEmail);
            console.log(newPhone);
            console.log(total);
            console.log(order);
            addDoc(ordersCollections, order).then((doc) => setOrderId(doc.id));
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                text: `You must fill out all the fields!`,
                background: '#101000',
                color: '#ffffff',
                showConfirmButton: false,
                timer: 4500
            })
        }
    }

    useEffect(() => {
        if (orderId) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                width: 600,
                background: '#363636',
                color: '#ffffff',
                titleText: `¡Thank you for your purchase ${newName}!`,
                text: `The code for your order is: ${orderId}`,
                showConfirmButton: false,
                timer: 4800
            })
            setNewName('')
            setNewPhone('')
            setNewEmail('')
            clearCart()
            navigate('/lyk-brewing-co')
        }
    }, [orderId, clearCart, navigate, newName])


    return (
        <div className='py-8 px-8 text-center justify-items-center content-center bg-pages min-h-screen lg:px-96'>
            <h2 className= 'text-white font-bold text-2xl p-6 mb-4 text-center lg:text-3xl'>END PURCHASE</h2>
            <form className='bg-black flex flex-col border border-gray-700 rounded-md p-14 lg:px-16' onSubmit={submitHandler}>
                <label className='text-left p-2 block lg:mx-10'> Full name: </label>
                <input className='text-black p-2 mb-8 rounded-md lg:mx-10' type="text" id="name" value={newName} onChange={nameHandler}></input>
                <label className='text-left p-2 block lg:mx-10'> Phone number: </label>
                <input className='text-black p-2 mb-8 rounded-md lg:mx-10' type="text" id="phone" value={newPhone} onChange={phoneHandler}></input>
                <label className='text-left p-2 block lg:mx-10'> Email address: </label>
                <input className='text-black p-2 mb-8 rounded-md lg:mx-10' type="text" id="email" value={newEmail} onChange={emailHandler}></input>
                <br/>
                <button className='bg-green-800 text-base m-2 mx-14 p-2 px-6 border border-green-800 rounded-md lg:m-4 lg:mx-36 lg:p-3' type='submit'> BUY </button>
            </form>
        </div>
    );
}

export default EndPurchase;