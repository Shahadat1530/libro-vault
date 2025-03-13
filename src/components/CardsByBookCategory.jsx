import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const CardsByBookCategory = ({ book }) => {
    return (
        <div>
            <div className="border p-4 rounded-2xl shadow-lg bg-[#fcf7ff] hover:shadow-xl transition-shadow duration-300">
                <img
                    src={book.image}
                    alt={book.name}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#4338ca]">{book.bookName}</h3>
                <p className="text-gray-700">Author: <span className="text-[#978ab5]">{book.authorName}</span></p>
                <p className="text-gray-700">Category: <span className="text-[#978ab5]">{book.category}</span></p>
                <p className="text-gray-700">Quantity: <span className="text-[#978ab5]">{book.quantity}</span></p>
                <div className="flex items-center mt-2">
                    <span className="mr-2 font-semibold text-[#4338ca]">Rating:</span>
                    <ReactStars
                        count={5}
                        value={book.rating}
                        size={22}
                        edit={false}
                        activeColor="#ffd700"
                    />
                </div>
                <Link to={`/books/${book._id}`}>
                    <button className="mt-4 w-full bg-[#4338ca] text-white py-2 rounded-lg transition-all duration-300 hover:bg-[#978ab5] hover:shadow-md">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CardsByBookCategory;
