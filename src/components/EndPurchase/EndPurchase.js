import { useState, useContext } from 'react';
import Swal from 'sweetalert2'
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc, doc } from "firebase/firestore";
import { CartContext, CartProvider } from '../CartContext/CartContext';
import './EndPurchase.css'
import { useCallback } from 'react';

function EndPurchase() {

    const firebaseConfig = {
        apiKey: "AIzaSyDpqtYSx38UNpjpzgScE8j7AZIUQou77Ok",
        authDomain: "lyk-brewing-co.firebaseapp.com",
        projectId: "lyk-brewing-co",
        storageBucket: "lyk-brewing-co.appspot.com",
        messagingSenderId: "245154058584",
        appId: "1:245154058584:web:e3a26e60c1e949283b952d",
        measurementId: "G-P4KQL49R54"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)

    const { total, cart } = useContext(CartContext)

    const [newName, setNewName] = useState("")
    const [newPhone, setNewPhone] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [orderId, setOrderId] = useState()

    const nameHandler = (event) => {
        setNewName(event.target.value)
    }

    const phoneHandler = (event) => {
        setNewPhone(event.target.value)
    }

    const emailHandler = (event) => {
        setNewEmail(event.target.value)
    }

    const submitHandler = (event)=> {
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
            date: "1"
        }
        addDoc(ordersCollections, order).then((doc) => setOrderId(doc.id));
        Swal.fire({
            position: 'center',
            icon: 'success',
            text: `Gracias por tu compra ${order.buyer.name}`,
            showConfirmButton: false,
            timer: 1500
        })
        setNewName("")
        setNewPhone("")
        setNewEmail("")
    }

    return (
        <>
            <h2 className='title'>FINALIZAR COMPRA</h2>
            <div className='end-purchase-div'>
                <form className='end-purchase-form' onSubmit={submitHandler}>
                    <label className='end-purchase-form-label'> Nombre completo: </label>
                    <input className='end-purchase-form-input' type="text" id="name" value={newName} onChange={nameHandler}></input>
                    <label className='end-purchase-form-label'> Teléfono: </label>
                    <input className='end-purchase-form-input' type="text" id="phone" value={newPhone} onChange={phoneHandler}></input>
                    <label className='end-purchase-form-label'> Correo electrónico: </label>
                    <input className='end-purchase-form-input' type="text" id="email" value={newEmail} onChange={emailHandler}></input>
                    <button className='end-purchase-form-btn' type='submit'> Comprar </button>
                </form>
            </div>
        </>
    );
  }
  
  export default EndPurchase;