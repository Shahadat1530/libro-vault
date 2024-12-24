import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const CardsByBookCategory = ({ book }) => {
    return (
        <div>
            <div className="border p-4 rounded shadow-lg">
                <img
                    src={book.image}
                    alt={book.name}
                    className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold">{book.bookName}</h3>
                <p className="text-gray-600">Author: {book.authorName}</p>
                <p className="text-gray-600">Category: {book.category}</p>
                <p className="text-gray-600">Quantity: {book.quantity}</p>
                <div className="flex items-center">
                    <span className="mr-2 font-semibold">Rating:</span>
                    <ReactStars
                        count={5}
                        value={book.rating}
                        size={20}
                        edit={false}
                        activeColor="#ffd700"
                    />
                </div>
                <Link to={`/books/${book._id}`}>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CardsByBookCategory;