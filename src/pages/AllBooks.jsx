import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCards from '../components/BookCards';

const AllBooks = () => {
    const books = useLoaderData();
    return (
        <div className='my-8 max-w-screen-2xl mx-auto'>
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
                Explore Our Library Collection
            </h2>
            <p className="text-lg text-center text-gray-600">
                Discover a wide range of books across various genres, from thrilling mysteries to captivating dramas.
                Whether you're looking for knowledge, adventure, or entertainment, our library has something for everyone.
                Start exploring today!
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 p-2'>
                {
                    books.map(book => 
                    <BookCards
                        key={book._id}
                        book={book}
                    ></BookCards>)
                }
            </div>
        </div>
    );
};

export default AllBooks;