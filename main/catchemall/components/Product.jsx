import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({sealedProducts: {image, name, setName, price, slug, description } }) => {
  return (
    <div>
      <Link href={`/product/${slug.currentt}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} className='product-image'/>
          <div className='product-name-price'>
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product