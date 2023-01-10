import React from 'react'
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { Product } from '../../components';

import {client, urlFor} from '../../lib/client';

const ProductDetails = ({products, clickedProduct}) => {
  const { image, name, description, price }  = clickedProduct; 
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='product-image-container'>
                    <figure>
                        <img src={image && image[0]} className='product-detail-image'/>
                    </figure>
                </div>
                {/*<div className='small-images-container'>
                    {image?.map((item, image) => 
                    (<img src={item} className="" onMouseEnter=""/>)
                    )}
                </div> */}
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <div className='reviews'>
                    <div>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                    <p>(210)</p>
                </div>
                <h4>Product Details: </h4>
                <p>{description}</p>
                <p className='price'>{price}</p>
                <div className='quantity'>
                    <h3>Quantity: </h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick="">
                            <AiOutlineMinus/>
                        </span>
                        <span className='num' onClick="">0</span>
                        <span className='plus' onClick="">
                            <AiOutlinePlus/>
                        </span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart' onClick="">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
        <div className='maylike-products-wrapper'>
            <h2>Products Like This</h2>
            <div className='marquee'>
                <div className='maylike-products-container track'>
                    {products?.map((item) => 
                    <Product key={item._id} products={item}/>
                    )}
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
    const similiarProductsQuery = '*[_type == "sealedProducts"][1...9]';

    const clickedProduct = await client.fetch(query);
    const products = await client.fetch(similiarProductsQuery);

    return {
        props: { products, clickedProduct }
    }
}

export default ProductDetails