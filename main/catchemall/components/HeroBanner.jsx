import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner, product}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='featured-product'>{heroBanner.smallText}</p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            <h1>{heroBanner.largeText2}</h1>
            <img src={urlFor(heroBanner.image)} alt='featured' className='hero-banner-image' style={{height: 300, width: 300}}></img>
            <div>
                <Link href={`/product/${product.slug.current}`}>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>{heroBanner.productDescription}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner