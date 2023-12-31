import { NavLink } from 'react-router-dom';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <header className='header'>
      <nav>
        <ul className="navbar">
          <NavLink to='/' className='item-logo'> <img src={logo} alt="logo" className="logo"/> </NavLink>
          <NavLink to='/about' className='item-menu'> About </NavLink>
          <NavLink to='/products/category/all' className='item-menu'> Products </NavLink>
          <NavLink to='/visit' className='item-menu'> Visit </NavLink>
          <NavLink to='/contact' className='item-menu'> Contact </NavLink>
          <NavLink to='/cart'><CartWidget/></NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;