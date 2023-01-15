import React from 'react';

import {client} from '../lib/client';
import {Product, FooterBanner, HeroBanner} from '../components';

const Home = ({featuredProductsData, bannerData, heroBannerProduct, footerBannerProduct}) => (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[1]} product={heroBannerProduct}/>
      <div className='products-heading'>
        <h2>Featured Products</h2>
        <p>The ultimate sealed products for your collection</p>
      </div>

      <div className='products-container'>
        {featuredProductsData?.map((featuredProducts) => <Product key={featuredProducts._id} products={featuredProducts}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} footerProduct={footerBannerProduct}/>
    </div>
  );

  function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomProduct = randomInRange(1,700);
  const randomProductEnd = randomProduct + 8;

  export const getServerSideProps = async () =>{

    const featuredProductsQuery = `*[_type == "sealedProducts"][${randomProduct}...${randomProductEnd}]`;
    const featuredProductsData = await client.fetch(featuredProductsQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    const heroBannerProductQuery = `*[_type == "sealedProducts" && name == "${bannerData[1].product}"][0]`;
    const heroBannerProduct = await client.fetch(heroBannerProductQuery);

    const footerBannerProductQuery = `*[_type == "sealedProducts" && name == "${bannerData[0].product}"][0]`;
    const footerBannerProduct = await client.fetch(footerBannerProductQuery);
    
    return {
      props: {featuredProductsData, bannerData, heroBannerProduct, footerBannerProduct}
    };
  }


export default Home;