import NavCat from '../../components/NavCat';
import ItemListContainer from '../../components/ItemListContainer';
import Footer from '../../components/Footer';

function Products() {

    return (
      <>
        <NavCat/>
        <div className='bg-black flex flex-col min-h-screen'>
          <ItemListContainer/>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default Products;