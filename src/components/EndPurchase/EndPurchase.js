import { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { collection, addDoc} from "firebase/firestore";
import { db } from "../../services/FirebaseConfig"
import { CartContext} from '../CartContext/CartContext';
import './EndPurchase.css'
import { useNavigate } from 'react-router-dom';

function EndPurchase() {

    let navigate = useNavigate()
    const { total, cart, clearCart } = useContext(CartContext)

    const [newName, setNewName] = useState("")
    const [newPhone, setNewPhone] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [orderId, setOrderId] = useState("")

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
        const ordersCollections = collection(db, "orders")
        const newBuyer = {
            name: newName,
            phone: newPhone,
            email: newEmail
        }
        const order = {
            buyer: newBuyer,
            total: total,
            items: cart,
            date: Date(),
        }
        if (newName && newPhone && newEmail) {
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
            setNewName("")
            setNewPhone("")
            setNewEmail("")
            clearCart()
            navigate("/")
        }
    }, [orderId, clearCart, navigate, newName])


    return (
        <>
            <h2 className='title'>END PURCHASE</h2>
            <div className='end-purchase-div'>
                <form className='end-purchase-form' onSubmit={submitHandler}>
                    <label className='end-purchase-form-label'> Full name: </label>
                    <input className='end-purchase-form-input' type="text" id="name" value={newName} onChange={nameHandler}></input>
                    <label className='end-purchase-form-label'> Phone number: </label>
                    <input className='end-purchase-form-input' type="text" id="phone" value={newPhone} onChange={phoneHandler}></input>
                    <label className='end-purchase-form-label'> Email address: </label>
                    <input className='end-purchase-form-input' type="text" id="email" value={newEmail} onChange={emailHandler}></input>
                    <button className='end-purchase-form-btn' type='submit'> BUY </button>
                </form>
            </div>
        </>
    );
  }
  
  export default EndPurchase;