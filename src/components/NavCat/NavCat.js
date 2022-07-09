import { NavLink } from "react-router-dom";
import './NavCat.css'

function NavCat() {
    return (
      <nav>
        <ul className="nav-cat">
          <NavLink to='/products/category/all' reloadDocument="true" className='item-menu-cat'> Todas </NavLink>
          <NavLink to='/products/category/blonde' reloadDocument="true" className='item-menu-cat'> Blonde </NavLink>
          <NavLink to='/products/category/black' reloadDocument="true" className='item-menu-cat'> Black </NavLink>
          <NavLink to='/products/category/red' reloadDocument="true" className='item-menu-cat'> Red </NavLink>
        </ul>
      </nav>
    );
  }
  
  export default NavCat;