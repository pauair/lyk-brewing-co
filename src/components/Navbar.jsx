import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import UserAvatar from './UserAvatar';
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <header className='content-center text-center min-w-full'>
      <nav className='my-0'>
        <ul className='max-w-full px-1 py-3 flex bg-black justify-between items-center lg:px-8 lg:py-0'>
          <NavLink to='/lyk-brewing-co' className='self-center'> <img src={logo} alt="logo" className='size-20 mx-1 lg:size-32 lg:mx-5' /> </NavLink>
          <NavLink to='/about' className='self-center uppercase text-xs hover:font-semibold focus:text-amber-400 lg:text-lg'> About </NavLink>
          <NavLink to='/products/category/all' className='self-center uppercase text-xs hover:font-semibold focus:text-amber-400 lg:text-lg'> Products </NavLink>
          <NavLink to='/visit' className='self-center uppercase text-xs hover:font-semibold focus:text-amber-400 lg:text-lg'> Visit </NavLink>
          <NavLink to='/contact' className='self-center uppercase text-xs hover:font-semibold focus:text-amber-400 lg:text-lg'> Contact </NavLink>
          <div className='flex flex-col mb-2'>
            <NavLink to='/cart'><CartWidget /></NavLink>
            <NavLink to='/auth'><UserAvatar /></NavLink>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;