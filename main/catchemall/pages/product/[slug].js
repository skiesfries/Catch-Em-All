import React from 'react'

import {client, urlFor} from '../../lib/client';

const ProductDetails = ({products, clickedProduct}) => {
  const { image, name, details, price }  = clickedProduct;
    
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={image && image[0]}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "sealedProducts"] {slug{current}}`;
    const products = await client.fetch(query);
    
    const paths = products.map((product) => ({params: {
        slug: product.slug.current}
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: { slug }}) => {
    const query = `*[_type == "sealedProducts" && slug.current == '${slug}'][0]`;
    const similiarProductsQuery = '*[_type == "sealedProducts"][50...58]';

    const clickedProduct = await client.fetch(query);
    const products = await client.fetch(similiarProductsQuery);

    return {
        props: { products, clickedProduct }
    }
}

export default ProductDetails