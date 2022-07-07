import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Products from './pages/Products/Products';
import Visit from './pages/Visit/Visit';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/about" element={<AboutUs/>}> </Route>
            <Route path="/products/:id" element={<ItemDetailContainer/>}> </Route>
            <Route path="/products" element={<Products/>}> </Route>
            <Route path="/visit" element={<Visit/>}> </Route>
            <Route path="/contact" element={<Contact/>}> </Route>
          </Routes>
      </header>
    </div>
  );
}

export default App;
