import { Link } from "react-router-dom";
import './NavCat.css'

function NavCat() {
    return (
        <nav>
          <ul className="nav-cat">
            <Link to='/products/category/all' className='item-menu-cat'> Todas </Link>
            <Link to='/products/category/blonde' className='item-menu-cat'> Blonde </Link>
            <Link to='/products/category/black' className='item-menu-cat'> Black </Link>
            <Link to='/products/category/red' className='item-menu-cat'> Red </Link>
          </ul>
        </nav>
    );
  }
  
  export default NavCat;