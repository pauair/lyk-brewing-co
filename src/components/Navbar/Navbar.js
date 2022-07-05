import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <header className='header'>
        <ul className="navbar">
          <a> <img src={logo} alt="logo" className="logo"/> </a>
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