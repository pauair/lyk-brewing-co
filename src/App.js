import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
