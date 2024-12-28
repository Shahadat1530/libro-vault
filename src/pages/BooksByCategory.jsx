import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardsByBookCategory from '../components/CardsByBookCategory';

const BooksByCategory = () => {
    const { category } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`https://librovault-server.vercel.app/books/category/${category}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='max-w-screen-2xl mx-auto my-10'>
            <h2 className="text-3xl font-bold text-center mb-6">
                Books in the "{category}" Category
            </h2>
            <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    books.map(book => 
                    <CardsByBookCategory
                        key={book._id}
                        book={book}
                    ></CardsByBookCategory>)
                }
            </div>
        </div>
    );
};

export default BooksByCategory;