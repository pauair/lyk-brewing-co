import { NavLink } from 'react-router-dom';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <header className='header'>
      <nav>
        <ul className="navbar">
          <NavLink to='/' className="item-logo"> <img src={logo} alt="logo" className="logo"/> </NavLink>
          <NavLink to='/about' className='item-menu'> Nosotros </NavLink>
          <NavLink to='/products' className='item-menu'> Productos </NavLink>
          <NavLink to='/visit' className='item-menu'> Visita </NavLink>
          <NavLink to='/contact' className='item-menu'> Contacto </NavLink>
          <CartWidget/>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;