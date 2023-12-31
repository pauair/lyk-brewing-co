import './Contact.css'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc} from "firebase/firestore";
import { db } from "../../services/FirebaseConfig"
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

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
          text: `You must fill out all the fields!`,
          showConfirmButton: false,
          timer: 4500
      })
      }
    }

    return (
      <>
        <div className='contact-div'>
          <p className='contact-p'>If you have any questions or suggestions, feel free to contact us. We are at your service.</p>
          <div className='contact-div'>
                  <form className='contact-form' onSubmit={submitHandler}>
                      <label className='contact-form-label'> Full name: </label>
                      <input className='contact-form-input' type="text" id="name" value={newName} onChange={nameHandler}></input>
                      <label className='contact-form-label'> Phone number: </label>
                      <input className='contact-form-input' type="text" id="phone" value={newPhone} onChange={phoneHandler}></input>
                      <label className='contact-form-label'> Email Address: </label>
                      <input className='contact-form-input' type="text" id="email" value={newEmail} onChange={emailHandler}></input>
                      <label className='contact-form-label'> Message: </label>
                      <textarea className='contact-form-input-area' type="text" id="message" value={newMessage} onChange={messageHandler}></textarea>
                      <button className='contact-form-btn' type='submit'> SEND </button>
                  </form>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </>
    );
  }
  
  export default Contact;