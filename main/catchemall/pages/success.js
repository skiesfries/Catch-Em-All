import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import {useRouter} from 'next/router';

import {useStateContext} from '../context/StateContext';


const Success = () => {
    const {setCartItems, setCartTotal, setCartQuantity} = useStateContext();
    useEffect(() => {
        localStorage.clear(); // will be implemented later
        setCartItems([]);
        setCartTotal(0);
        setCartQuantity(0);
    }), [];

    return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'><BsBagCheckFill/></p>
            <h2>Your order was successfully completed!</h2>
            <p className='email-msg'>Check your email for a summary of your order.</p>
            <p className='description'>If you have any questions concerning your order, please email us
                <a className='email' href='mailto:tortiz942@gmail.com'>
                    here
                </a>
            </p>
            <Link href='/'>
                <button type='button' className='btn'>Return to Homepage</button>
            </Link>
        </div> 
    </div>
  )
}

export default Success;