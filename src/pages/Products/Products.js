import './Products.css'
import NavCat from '../../components/NavCat/NavCat';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import Footer from '../../components/Footer/Footer';

function Products() {

    return (
      <>
        <NavCat/>
        <div className='products-container'>
          <ItemListContainer/>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default Products;