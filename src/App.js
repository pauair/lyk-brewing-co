import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Visit from './pages/Visit/Visit';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}> </Route>
            <Route exact path="/about" element={<AboutUs/>}> </Route>
            <Route exact path="/products/:id" element={<ItemDetailContainer/>}> </Route>
            <Route exact path="/products/category/:cat" element={<Products/>}> </Route>
            <Route exact path="/visit" element={<Visit/>}> </Route>
            <Route exact path="/contact" element={<Contact/>}> </Route>
          </Routes>
      </header>
    </div>
  );
}

export default App;