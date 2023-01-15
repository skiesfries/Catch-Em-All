import React, {useRef} from 'react';
import Link from 'next/link';
import {AiOutlineMinus, AiOutlinePlus, AiOutlineClose, AiOutlineShopping} from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti';
import toast from 'react-hot-toast';


import { useStateContext } from '../context/StateContext';
import { Tooltip } from 'react-tooltip';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const {cartTotal, cartQuantity, cartItems, setShowCart, toggleCartItemQuantity, removeItemFromCart} = useStateContext();
  
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    console.log(response.body);

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

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
            {cartItems.length >= 1 && cartItems.map((item) => (
              <div className='product' key={item._id}>
                <img src={item?.image[0]} alt="product-image" className='cart-product-image' />
                <div className='item-desc'>
                  <div className='flex top'>
                      <h4 className='cart-item-name'>{item.name}</h4>
                      <h4>${item.price} x{item.quantity}</h4>
                  </div>
                  <div className='flex bottom'>
                      <div>
                        <p className='quantity-desc'>
                        <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'decrease')}>
                            <AiOutlineMinus/>
                        </span>
                        <span className='num' onClick="">{item.quantity}</span>
                        <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'increase')}>
                            <AiOutlinePlus/>
                        </span>
                        </p>
                      </div>
                      <button type='button' id="delete-btn" data-tooltip-content="Remove Item" className='remove-item' onClick={() => removeItemFromCart(item._id)}>
                      <Tooltip anchorId="delete-btn" />
                        <TiDeleteOutline/>
                      </button>
                  </div>
                </div>
              </div>
            ))}         
          </div>
          {cartItems.length >= 1 && (
            <div className='cart-bottom'>
              <div className='total'>
                <h3>Subtotal: </h3>
                <h3>${cartTotal.toFixed(2)}</h3>
              </div>
              <div className='btn-container'>
                <button type='button' className='btn' onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Cart