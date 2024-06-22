import React, { useState, useEffect } from 'react';
import Card from './Card';

const NewsList = ({ type, endpoint }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Calculate the indices for the items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the items for the current page
    const currentItems = Array.isArray(endpoint) ? endpoint.slice(startIndex, endIndex) : [];

    // Determine the total number of pages
    const totalPages = Array.isArray(endpoint) ? Math.ceil(endpoint.length / itemsPerPage) : 0;

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Render page numbers for pagination
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="w-full flex flex-col px-3 items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-4">
                {currentItems.map((item, index) => (
                    <div key={index} className={`flex-none ${type === '1' && ''} mr-2`}>
                        <Card {...item} type={type} id={index} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {renderPageNumbers()}
            </div>
        </div>
    );
};

export default NewsList;

