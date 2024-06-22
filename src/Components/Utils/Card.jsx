import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HeartIcon, EyeIcon } from '@heroicons/react/24/solid';

const Card = ({ urlToImage, author, title, content, description, publishedAt, source, url, type, id }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const addToWishList = async () => {
        // Add logic for adding to wishlist
    };

    const viewRecipe = () => {
        // Navigate to detailed view page
        // Example: navigate(`/recipe/${recipeId}`);
    };

    return (
        <div className="relative">
            <div className="flex flex-row rounded-lg overflow-hidden shadow-lg shadow-[#ffffff5a] h-[20rem] bg-gradient-to-r from-[#3f4c6b] to-[#606c88] p-4 text-gray-500 transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-300 cursor-pointer" onClick={toggleModal}>
                <div className="relative p-[12px] w-[30rem]">
                    <img src={urlToImage} alt={`Card_imageid_${id}`} className="w-full h-full object-cover group-hover:scale-105 duration-300 rounded-[15px]" />
                </div>
                <div className=" p-4 flex flex-col justify-between flex-grow rounded-b-lg">
                    <div>
                        <h2 className={`text-xl font-bold text-[#e4e4e4] mb-2 ${type === "2" && 'text-sm'}`}>{title}</h2>
                        <p className={`text-[#a8a8a8] ${type === "2" && 'text-xs'}`}>By {author}</p>
                    </div>
                    <div className="mt-4 flex flex-row gap-2">
                        <button onClick={addToWishList} className={`bg-violet-500 w-[4rem] h-[3.5rem] text-white py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:ring-blue-400 transition duration-300 ${type === '2' && 'text-xs'} ${type === '3' ? 'hidden' : ''}`}>
                            {type === "1" ? <HeartIcon className="w-[2rem]" /> : "Remove from Wishlist"}
                        </button>
                        <button onClick={viewRecipe} className="bg-gray-300 w-[4rem] h-[3.5rem] text-gray-800 py-2 px-4 rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400 transition duration-300">
                            <EyeIcon className="w-[2rem]" />
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg max-w-[90%] max-h-[90%] overflow-y-auto">
                        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={toggleModal}>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img src={urlToImage} alt={`Card_imageid_${id}`} className="w-full h-auto rounded-lg mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                        <p className="text-gray-600 mb-2">By {author}</p>
                        <p className="text-gray-600 mb-2">{publishedAt}</p>
                        <p className="text-gray-600 mb-2">{source.name}</p>
                        <p className="text-gray-600 mb-2">{description}</p>
                        <p className="text-gray-600 mb-2">{content}</p>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
