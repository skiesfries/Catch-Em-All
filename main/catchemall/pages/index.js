import React from 'react';

import {client} from '../lib/client';
import {Product, FooterBanner, HeroBanner} from '../components';

const Home = ({featuredProductsData, bannerData}) => (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Featured Products</h2>
        <p>The ultimate sealed products for your collection</p>
      </div>

      <div className='products-container'>
        {featuredProductsData?.map((featuredProducts) => <Product key={featuredProducts.id} featuredProducts={featuredProducts}/>)}
      </div>

      <FooterBanner/>
    </div>
  );

  export const getServerSideProps = async () =>{

    const featuredProductsQuery = '*[_type == "featuredProducts"]';
    const featuredProductsData = await client.fetch(featuredProductsQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
      props: {featuredProductsData, bannerData}
    };
  }


export default Home;