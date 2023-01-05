import React from 'react';

import {client} from '../lib/client';
import {Product, FooterBanner, HeroBanner} from '../components';

const Home = ({sealedProductsData, cardSinglesData, bannerData}) => (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Featured Products</h2>
        <p>The ultimate sealed products for your collection</p>
      </div>

      <div className='products-container'>
        {sealedProductsData?.map((sealedProducts) => <Product key={sealedProducts.id} sealedProducts={sealedProducts}/>)}
      </div>

      <FooterBanner/>
    </div>
  );

  export const getServerSideProps = async () =>{

    const sealedProductQuery = '*[_type == "sealedProducts"]';
    const sealedProductsData = await client.fetch(sealedProductQuery);
    
    const cardSinglesQuery = '*[_type == "cardSingles"]';
    const cardSinglesData = await client.fetch(cardSinglesQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
      props: {sealedProductsData, cardSinglesData, bannerData}
    };
  }


export default Home;