import './CartWidget.css';
import cartImg from '../assets/cartImg.png'

function CartWidget() {
  return (
    <img src={cartImg} className="cartImg"/>
  );
}

export default CartWidget;