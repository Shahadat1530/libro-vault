import React from 'react';
import { Link } from 'react-router-dom';

const BookCards = ({ book }) => {
    const { image, bookName, authorName, category } = book;

    return (
        <div className='h-[480px]'>
            <div
                className="card card-compact h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden"
                style={{
                    background: 'linear-gradient(to bottom, #58fbda, #4338ca)', // Lighter top (#58fbda) to darker bottom (#4338ca)
                    border: '1px solid #008dff'
                }}
            >
                <figure className='h-60 p-4'>
                    <img
                        src={image}
                        alt={`image of ${bookName}`}
                        className='h-full w-full object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105'
                    />
                </figure>
                <div className="card-body p-5 flex flex-col justify-between">
                    <div className="space-y-3">
                        <h2
                            className="card-title text-2xl font-bold mb-2 line-clamp-2"
                            style={{ color: '#ffffff' }} // White for readability against darker gradient
                        >
                            {bookName}
                        </h2>
                        <div className="space-y-2">
                            <p
                                className="text-base font-medium"
                                style={{ color: '#00c9f5' }} // Changed to #00c9f5 for better contrast
                            >
                                <span className="font-semibold">Author:</span> {authorName}
                            </p>
                            <p
                                className="text-base font-medium"
                                style={{ color: '#00c9f5' }} // Changed to #00c9f5 for better contrast
                            >
                                <span className="font-semibold">Category:</span> {category}
                            </p>
                        </div>
                    </div>
                    <div className="card-actions mt-3">
                        <Link
                            to={`/update/${book._id}`}
                            className="btn w-full py-2 rounded-md text-white font-semibold transition-all duration-300 hover:shadow-lg"
                            style={{
                                background: 'linear-gradient(to right, #4338ca, #008dff)',
                            }}
                        >
                            Update Book
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCards;