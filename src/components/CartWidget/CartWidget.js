import './CartWidget.css';
import cartImg from '../../assets/cartImg.png'

function CartWidget() {
  return (
    <img src={cartImg} alt="cart" className="cart-img"/>
  );
}

export default CartWidget;