import React from 'react';

const BookCards = ({ book }) => {
    const { image, bookName, authorName, category } = book;
    return (
        <div className='h-[600px]'>
            <div className="card card-compact h-full bg-base-100 hover:shadow-2xl hover:-translate-y-6">
                <figure className='h-96'>
                    <img
                        src={image}
                        alt={`image of ${bookName}`}
                        className='h-full' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-semibold">{bookName}</h2>
                    <p className="text-gray-600"><strong>Author:</strong> {authorName}</p>
                    <p className="text-gray-600"><strong>Category:</strong> {category}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCards;