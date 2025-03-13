import React from 'react';
import { Link } from 'react-router-dom';

const BookCards = ({ book }) => {
    const { image, bookName, authorName, category } = book;

    return (
        <div className='h-[480px]'> {/* Reduced overall height */}
            <div
                className="card card-compact h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden"
                style={{
                    background: 'linear-gradient(to bottom right, #fffade, #fcf7ff)',
                    border: '1px solid #978ab5'
                }}
            >
                <figure className='h-60 p-4'> {/* Slightly reduced image height */}
                    <img
                        src={image}
                        alt={`image of ${bookName}`}
                        className='h-full w-full object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105'
                    />
                </figure>
                <div className="card-body p-5 flex flex-col justify-between"> {/* Added flex properties */}
                    <div className="space-y-3">
                        <h2
                            className="card-title text-2xl font-bold mb-2 line-clamp-2"
                            style={{ color: '#4338ca' }}
                        >
                            {bookName}
                        </h2>
                        <div className="space-y-2">
                            <p
                                className="text-base font-medium"
                                style={{ color: '#978ab5' }}
                            >
                                <span className="font-semibold">Author:</span> {authorName}
                            </p>
                            <p
                                className="text-base font-medium"
                                style={{ color: '#978ab5' }}
                            >
                                <span className="font-semibold">Category:</span> {category}
                            </p>
                        </div>
                    </div>
                    <div className="card-actions mt-3"> {/* Reduced margin */}
                        <Link
                            to={`/update/${book._id}`}
                            className="btn w-full py-2 rounded-md text-[#fcf7ff] font-semibold transition-all duration-300 hover:shadow-lg"
                            style={{
                                background: 'linear-gradient(to right, #4338ca, #978ab5)',
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