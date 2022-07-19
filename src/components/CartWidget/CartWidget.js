import './CartWidget.css';
import { useContext, useEffect, useState } from 'react';
import cartImg from '../../assets/cartImg.png'
import { CartContext } from '../CartContext/CartContext';

function CartWidget() {

  const { totalQty } = useContext(CartContext)

  return (
    <div className="cart-div">
      <p className="cart-cant">{totalQty()}</p>
      <img className="cart-img" src={cartImg} alt="cart" />
    </div>
  );
}

export default CartWidget;