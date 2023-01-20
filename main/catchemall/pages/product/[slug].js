import React from 'react';
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { Product } from '../../components';
import {useStateContext} from '../../context/StateContext';

import {client, urlFor} from '../../lib/client';

const ProductDetails = ({products, clickedProduct}) => {
  const { image, name, setName, description, price }  = clickedProduct; 
  const {decreaseQty, increaseQty, qty, addToCart} = useStateContext();

  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='product-image-container'>
                    <figure>
                        <img src={image && image[0]} className='product-detail-image'/>
                    </figure>
                </div>
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <h3>Set: {setName}</h3>
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
                <p className='price'>${price.toFixed(2)}</p>
                <div className='quantity'>
                    <h3>Quantity: </h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick={decreaseQty}>
                            <AiOutlineMinus/>
                        </span>
                        <span className='num'>{qty}</span>
                        <span className='plus' onClick={increaseQty}>
                            <AiOutlinePlus/>
                        </span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart' onClick={()=> addToCart(clickedProduct,qty)}>
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
    const query = `*[_type in ["sealedProducts", "cardSingles"] && slug.current == '${slug}'][0]`;
    const clickedProduct = await client.fetch(query);

    const similiarProductsQuery = `*[_type in ["sealedProducts", "cardSingles"] && setName == '${clickedProduct.setName}'][1...9]`;
    const products = await client.fetch(similiarProductsQuery);

    return {
        props: { products, clickedProduct }
    }
}

export default ProductDetails