import React from 'react';

import {Product, FooterBanner, HeroBanner} from '../components';

const index = () => {
  return (
    <>
      <HeroBanner/>

      <div className='products-heading'>
        <h2>Featured Products</h2>
        <p>The ultimate sealed products for your collection</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      <FooterBanner/>
    </>
  )
}

export default index