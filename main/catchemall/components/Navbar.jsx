import React, {useRef} from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';
import { useRouter } from 'next/router';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const {showCart, setShowCart, cartQuantity, setSearchTerm, searchTerm} = useStateContext();
  const router = useRouter();
  const searchInputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      router.push({ pathname: '/searchresults', query: { searchTerm } });
      searchInputRef.current.value = "";
    }
  };
  return (
    <div className='navbar-container'>
      <div className='logo'>
      <p>CATCH EM ALL</p>
        <Link href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png?20161023215848" className="poke" alt="Logo"/>
        </Link>
      </div>
      <div className='navbar-links'>
        <Link href="/sealedproducts">
          <a className='navbar-link'>Sealed Products</a>
        </Link>
        <Link href="/cardsingles">
          <a className='navbar-link'>Card Singles</a>
        </Link>
      </div> 
      <div className='search-container'>
        <input 
        type='text' 
        placeholder='Search...' 
        className='search-input'
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        ref={searchInputRef}
        />
      </div>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{cartQuantity}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar