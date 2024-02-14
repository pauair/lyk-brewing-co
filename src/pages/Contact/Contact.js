import { useState } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc} from "firebase/firestore";
import { db } from "../../services/FirebaseConfig"
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

function Contact() {

    let navigate = useNavigate()

    const [newName, setNewName] = useState("")
    const [newPhone, setNewPhone] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newMessage, setNewMessage] = useState("")

    const nameHandler = (event) => {
        setNewName(event.target.value)
    }

    const phoneHandler = (event) => {
        setNewPhone(event.target.value)
    }

    const emailHandler = (event) => {
        setNewEmail(event.target.value)
    }

    const messageHandler = (event) => {
      setNewMessage(event.target.value)
  }

    const submitHandler = (event) => {
      event.preventDefault();
      const contactsCollections = collection(db, "contacts")
      const contact = {
        name: newName,
        phone: newPhone,
        email: newEmail,
        message: newMessage,
      }
      if (newName && newPhone && newEmail && newMessage) {
        addDoc(contactsCollections, contact).then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            background: '#363636',
            color: '#ffffff',
            titleText: `¡Thanks for contact us, ${newName}!`,
            text: `We will get back to you shortly.`,
            showConfirmButton: false,
            timer: 4800
        })
        navigate("/")
        })
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          background: '#363636',
          color: '#ffffff',
          text: `You must fill out all the fields!`,
          showConfirmButton: false,
          timer: 4500
      })
      }
    }

    return (
      <>
        <div className='py-8 px-8 text-center justify-items-center content-center bg-pages min-h-screen lg:px-96'>
            <p className='animate__animated animate__fadeIn p-6 pb-12 text-md lg:py-16 lg:text-lg'>If you have any questions or suggestions, feel free to contact us. <br/> We are at your service.</p>
            <form className='animate__animated animate__fadeIn bg-black flex flex-col border border-gray-700 rounded-md m-3 p-10 lg:m-0 lg:p-14 lg:px-16' onSubmit={submitHandler}>
                <label className='text-left p-2 block lg:mx-10'> Full name: </label>
                <input className='text-black p-2 mb-4 rounded-md lg:mx-10' type="text" id="name" value={newName} onChange={nameHandler}></input>
                <label className='text-left p-2 block lg:mx-10'> Phone number: </label>
                <input className='text-black p-2 mb-4 rounded-md lg:mx-10' type="text" id="phone" value={newPhone} onChange={phoneHandler}></input>
                <label className='text-left p-2 block lg:mx-10'> Email Address: </label>
                <input className='text-black p-2 mb-4 rounded-md lg:mx-10' type="text" id="email" value={newEmail} onChange={emailHandler}></input>
                <label className='text-left p-2 block lg:mx-10'> Message: </label>
                <textarea className='text-black p-2 mb-4 rounded-md lg:mx-10' type="text" id="message" value={newMessage} onChange={messageHandler}></textarea>
                <button className='bg-green-800 text-base m-2 mx-14 p-2 px-6 border border-green-00 rounded-md lg:m-4 lg:mx-10 lg:px-6 lg:self-end' type='submit'> SEND </button>
            </form>
        </div>
        <div>
          <Footer/>
        </div>
      </>
    );
  }
  
  export default Contact;