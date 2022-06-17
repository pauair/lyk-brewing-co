import './Navbar.css';
import CartWidget from './CartWidget'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <header className='header'>
        <ul className="Navbar">
          <img src={logo} className="logo"/>
          <a className='item-menu' href="#" >Nosotros</a>
          <a className='item-menu' href="#">Productos</a>
          <a className='item-menu' href="#">Visita</a>
          <a className='item-menu' href="#">Contacto</a>
          <CartWidget/>
        </ul>
    </header>
  );
}

export default Navbar;