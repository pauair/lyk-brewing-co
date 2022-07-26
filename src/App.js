import { Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './components/CartContext/CartContext';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Visit from './pages/Visit/Visit';
import CartView from './components/CartView/CartView';
import EndPurchase from './components/EndPurchase/EndPurchase';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <header>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}> </Route>
            <Route exact path="/about" element={<AboutUs/>}> </Route>
            <Route exact path="/products/:id" element={<ItemDetailContainer/>}> </Route>
            <Route exact path="/products/category/:cat" element={<Products/>}> </Route>
            <Route exact path="/visit" element={<Visit/>}> </Route>
            <Route exact path="/contact" element={<Contact/>}> </Route>
            <Route path="/cart" element={<CartView/>}> </Route>
            <Route path="/endPurchase" element={<EndPurchase/>}> </Route>
          </Routes>
      </header>
      </CartProvider>
    </div>
  );
}

export default App;