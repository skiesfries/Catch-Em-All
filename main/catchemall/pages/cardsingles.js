import React from 'react';
import {useState, useEffect} from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

import { client } from "../lib/client";
import { Product, Pagination} from "../components";
import { useStateContext } from '../context/StateContext';


const CardSingles = ({cards}) => {
    const {currentPage} = useStateContext();
    let filterOptions = ['Card Number', 'Set', 'Price'];
    const [filterOption, setFilterOption] = useState(filterOptions[0]);
    const cardsPerPage = 24;
    
    
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cardsToDisplay = cards.slice(startIndex, endIndex);
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
                {cardsToDisplay?.map((card) => (<Product key={card._id} products={card}/>))}   
            </div> 
            <Pagination/> 
        </div>
    )
}

export const getServerSideProps = async () => {
    const cardSinglesQuery = `*[_type == 'cardSingles'] | order(cardNumber)`;
    const cards = await client.fetch(cardSinglesQuery);

    return {
        props: {cards}
    };
}

export default CardSingles;