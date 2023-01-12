import React, {useRef} from 'react';
import Link from 'next/link';
import {AiOutlineMinus, AiOutlinePlus, AiOutlineClose, AiOutlineShopping} from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';

const Cart = () => {
  const cartRef = useRef();
  const {cartTotal, cartQuantity, cartItems, setShowCart} = useStateContext();
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineClose/>
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({cartQuantity} items)</span>
        </button>
        {cartItems.length === 0 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={100}/>
            <h3>Your cart is empty</h3>
            <Link href="/">
              <button type='button' onClick={() => setShowCart(false)} className='btn'>Return To HomePage</button>
            </Link>
          </div>
          )}
          <div className='product-container'>
            {cartItems.length >= 1 && cartItems.map((item, index) => (
              <div className='product' key={item._id}>
                <img src={item?.image[0]} alt="product-image" className='cart-product-image' />
              </div>
            ))}         
          </div>
      </div>
    </div>
  )
}

export default Cart