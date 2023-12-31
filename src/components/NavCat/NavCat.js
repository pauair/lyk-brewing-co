import { NavLink } from "react-router-dom";
import './NavCat.css'

function NavCat() {

    return (
      <nav>
        <ul className="nav-cat">
          <NavLink to='/products/category/all' className='item-menu-cat'> All </NavLink>
          <NavLink to='/products/category/blonde' className='item-menu-cat'> Blonde </NavLink>
          <NavLink to='/products/category/black' className='item-menu-cat'> Black </NavLink>
          <NavLink to='/products/category/red'className='item-menu-cat'> Red </NavLink>
        </ul>
      </nav>
    );
  }
  
  export default NavCat;