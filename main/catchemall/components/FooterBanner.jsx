import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerProduct, footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image }} ) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
          <Link href={`/product/${footerProduct.slug.current}`}>
            <button class="button-82-pushable" role="button">
              <span class="button-82-shadow"></span>
              <span class="button-82-edge"></span>
              <span class="button-82-front text">{buttonText}</span>
            </button>
          </Link>
        </div>
        
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          
        </div>

        

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
        
      </div>
    </div>
  )
}

export default FooterBanner