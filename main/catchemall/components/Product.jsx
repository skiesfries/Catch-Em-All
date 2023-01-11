import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({products: {image, name, setName, price, slug, description } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={image && image[0]} className='product-image'/>
          <div>
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product