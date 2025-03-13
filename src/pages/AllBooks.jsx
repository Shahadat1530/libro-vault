import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCards from '../components/BookCards';
import { Helmet } from 'react-helmet-async';

const AllBooks = () => {
    const booksData = useLoaderData();
    const [filteredBooks, setFilteredBooks] = useState(booksData);

    const handleFilterAvailableBooks = () => {
        const availableBooks = booksData.filter(book => book.quantity > 0);
        setFilteredBooks(availableBooks);
    };

    return (
        <div className='my-8 max-w-screen-2xl mx-auto'>
            <Helmet>
                <title>All Books</title>
            </Helmet>
            <h2 
                className="text-4xl font-bold text-center mb-6"
                style={{ color: '#4338ca' }}
            >
                Explore Our Library Collection
            </h2>
            <p 
                className="text-lg text-center"
                style={{ color: '#008dff' }}
            >
                Discover a wide range of books across various genres, from thrilling mysteries to captivating dramas.
                Whether you're looking for knowledge, adventure, or entertainment, our library has something for everyone.
                Start exploring today!
            </p>

            <div className="flex justify-center my-6">
                <button
                    onClick={handleFilterAvailableBooks}
                    className="btn px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg"
                    style={{
                        background: 'linear-gradient(to right, #4338ca, #008dff)',
                    }}
                >
                    Show Available Books
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 p-2'>
                {
                    filteredBooks.map(book => (
                        <BookCards
                            key={book._id}
                            book={book}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AllBooks;