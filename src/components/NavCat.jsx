import { NavLink } from "react-router-dom";

function NavCat() {

    return (
      <nav>
        <ul className='bg-black flex flex-row gap-14 justify-center border-y content-center p-2 min-w-full lg:gap-28'>
          <NavLink to='/products/category/all' className='uppercase self-center text-xs hover:font-bold focus:font-semibold focus:text-amber-400 lg:text-base'> All </NavLink>
          <NavLink to='/products/category/blonde' className='uppercase self-center text-xs hover:font-bold focus:font-semibold focus:text-amber-400 lg:text-base'> Blonde </NavLink>
          <NavLink to='/products/category/black' className='uppercase self-center text-xs hover:font-bold focus:font-semibold focus:text-amber-400 lg:text-base'> Black </NavLink>
          <NavLink to='/products/category/red'className='uppercase self-center text-xs hover:font-bold focus:font-semibold focus:text-amber-400 lg:text-base'> Red </NavLink>
        </ul>
      </nav>
    );
  }
  
  export default NavCat;