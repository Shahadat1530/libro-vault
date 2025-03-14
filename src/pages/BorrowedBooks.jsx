import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import BorrowedCard from '../components/BorrowedCard';
import { Helmet } from 'react-helmet-async';

const BorrowedBooks = () => {
    const { user } = useAuth();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios
                .get('https://librovault-server.vercel.app/borrowed-books')
                .then((response) => {
                    const allBooks = response.data;
                    const userBooks = allBooks.filter(
                        (book) => book.borrowerEmail === user.email
                    );
                    setBooks(userBooks);
                })
        }
    }, [user?.email]);

    const handleDeleteVisa = (id) => {
        setBooks(books.filter(book => book._id !== id));
    };

    return (
        <div className='max-w-screen-2xl min-h-[66vh] mx-auto my-10 text-center'>
            <Helmet>
                <title>Borrowed_Books</title>
            </Helmet>
            <h4 className='font-semibold text-4xl'>Borrowed Books</h4>
            {books.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {books.map((book) =>
                        <BorrowedCard
                            key={book._id}
                            book={book}
                            onDelete={handleDeleteVisa}
                        ></BorrowedCard>)}
                </div>
            ) : (
                <p className='font-bold text-red-600'>No borrowed books found for you.</p>
            )}
        </div>
    );
};

export default BorrowedBooks;
