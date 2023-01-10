import React from 'react';

import {client} from '../lib/client';
import {Product, FooterBanner, HeroBanner} from '../components';

const Home = ({featuredProductsData, bannerData}) => (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[1]}/>
      <div className='products-heading'>
        <h2>Featured Products</h2>
        <p>The ultimate sealed products for your collection</p>
      </div>

      <div className='products-container'>
        {featuredProductsData?.map((featuredProducts) => <Product key={featuredProducts.id} featuredProducts={featuredProducts}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  );

  function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

  export const getServerSideProps = async () =>{

    const randomProduct = randomInRange(1,700);
    const randomProductEnd = randomProduct + 7;
    const featuredProductsQuery = `*[_type == "sealedProducts"][${randomProduct}...${randomProductEnd}]`;
    const featuredProductsData = await client.fetch(featuredProductsQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
    
    return {
      props: {featuredProductsData, bannerData}
    };
  }


export default Home;