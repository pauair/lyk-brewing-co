import './Navbar.css';
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <header>
        <ul className="Navbar">
          <img src={logo} className="logo"/>
          <a className='item-menu' href="#" >Nosotros</a>
          <a className='item-menu' href="#">Productos</a>
          <a className='item-menu' href="#">Visita</a>
          <a className='item-menu' href="#">Contacto</a>
        </ul>
    </header>
  );
}

export default Navbar;