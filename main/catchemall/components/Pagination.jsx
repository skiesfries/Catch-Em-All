import React from 'react'
import { useStateContext } from '../context/StateContext';

const Pagination = () => {
    const { currentPage, setCurrentPage } = useStateContext();
    return (
        <div className="pagination">
            <button 
                className="pagination-button" 
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className="pagination-current-page">{currentPage}</span>
            <button 
                className="pagination-button" 
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === 33}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination