import React from 'react'
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='featured-product'>small text</p>
            <h3>mid text</h3>
            <img src='' alt='featured' className='hero-banner-image'></img>
            <div>
                <Link href='/product/ID'>
                    <button type='button'>Button Text</button>
                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>DESCRIPTION</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner