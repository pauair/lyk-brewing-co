import ItemCount from './ItemCount';
import './ItemListContainer.css';

function ItemListContainer() {
  return (
    <div>
      <h3 className="container">LYK BREWING CO.</h3>
      <ItemCount stock="5" initial="1" />
    </div>
  );
}

export default ItemListContainer;