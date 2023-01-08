import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <p>CATCH EM ALL</p>
        <Link href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png?20161023215848" className="poke" alt="Logo"/>
        </Link>
      </p>
      <div className='navbar-links'>
        <Link href="/sealedproducts">
          <a className='navbar-link'>Sealed Products</a>
        </Link>
        <Link href="/singles">
          <a className='navbar-link'>Card Singles</a>
        </Link>
      </div> 
      <button type='button' className='cart-icon' onClick="">
        <AiOutlineShopping/>
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar