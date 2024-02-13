import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <header className='content-center text-center min-w-full'>
      <nav className='my-0'>
        <ul className='max-w-full py-4 grid grid-cols-6 gap-x-2 bg-black justify-center items-center lg:py-0'>
          <NavLink to='/' className='self-center'> <img src={logo} alt="logo" className='m-1 size-14 lg:size-32 lg:mx-5'/> </NavLink>
          <NavLink to='/about' className='self-center uppercase text-xs hover:font-semibold focus:text-amber-400 lg:text-lg'> About </NavLink>
          <NavLink to='/products/category/all' className='self-center uppercase text-xs hover:font-semibold focus:text-amber-400 lg:text-lg'> Products </NavLink>
          <NavLink to='/visit' className='self-center uppercase text-xs hover:font-semibold focus:text-amber-400 lg:text-lg'> Visit </NavLink>
          <NavLink to='/contact' className='self-center uppercase text-xs hover:font-semibold focus:text-amber-400 lg:text-lg'> Contact </NavLink>
          <NavLink to='/cart'><CartWidget/></NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;