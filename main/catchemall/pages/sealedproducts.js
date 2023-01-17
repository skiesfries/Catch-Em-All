import React from 'react';
import {useState, useEffect} from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

import { client } from "../lib/client";
import { Product, Pagination} from "../components";
import { useStateContext } from '../context/StateContext';


const SealedProducts = ({products}) => {
    const {currentPage} = useStateContext();
    let filterOptions = ['Name', 'Price', 'Set'];
    const [isOpen, setIsOpen] = useState(false);
    const [filterOption, setFilterOption] = useState(filterOptions[0]);
    const productsPerPage = 24;
    
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    return (
        <div>
            <div className='sealed-products-heading'>
                <h1>All Sealed Products</h1>
                <div className='filters'>
                    <p>Sort by: </p>
                    <div className="sort-by-dropdown">
                        <div className="dropdown-content">
                            <a href="#byName">{filterOptions[0]}</a>
                            <a href="#byPrice">{filterOptions[1]}</a>
                            <a href="#bySet">{filterOptions[2]}</a>
                        </div>
                    </div>
                    <p>{filterOption}</p>
                </div>
            </div>
            <div className="sealed-products-container">
                {productsToDisplay?.map((product) => (<Product key={product._id} products={product}/>))}   
            </div> 
            <Pagination/> 
        </div>
    )
}

export const getServerSideProps = async () => {
    const sealedProductQuery = `*[_type == 'sealedProducts'] | order(name)`;
    const products = await client.fetch(sealedProductQuery);

    return {
        props: {products}
    };
}

export default SealedProducts;