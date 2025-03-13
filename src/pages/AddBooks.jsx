import React from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddBooks = () => {
    const { user } = useAuth();

    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;

        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const quantity = parseInt(form.quantity.value, 10);
        const description = form.description.value;
        const rating = parseFloat(form.rating.value);
        const image = form.image.value;
        const createdBy = user?.email;

        const newBook = {
            bookName, authorName, category, quantity, description, rating, image, createdBy
        };

        fetch('https://librovault-server.vercel.app/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Book has been added!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        form.reset();
    };

    return (
        <div 
            className="max-w-screen-lg mx-auto p-10 shadow-md rounded-lg"
            style={{ 
                background: 'linear-gradient(to bottom right, #58fbda, #00c9f5)',
                border: '1px solid #008dff'
            }}
        >
            <Helmet>
                <title>Add Books</title>
            </Helmet>
            <h2 
                className="text-3xl font-bold text-center mb-6"
                style={{ color: '#4338ca' }}
            >
                Add a New Book
            </h2>
            <form onSubmit={handleAddBook}>
                <div className="mb-4">
                    <label 
                        htmlFor="bookName" 
                        className="block font-medium"
                        style={{ color: '#4338ca' }}
                    >
                        Book Name
                    </label>
                    <input
                        type="text"
                        id="bookName"
                        name="bookName"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                        placeholder="Enter book name"
                        style={{ 
                            borderColor: '#008dff',
                            focusRingColor: '#4338ca'
                        }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="authorName" 
                        className="block font-medium"
                        style={{ color: '#4338ca' }}
                    >
                        Author Name
                    </label>
                    <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                        placeholder="Enter author name"
                        style={{ 
                            borderColor: '#008dff',
                            focusRingColor: '#4338ca'
                        }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="category" 
                        className="block font-medium"
                        style={{ color: '#4338ca' }}
                    >
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                        style={{ 
                            borderColor: '#008dff',
                            focusRingColor: '#4338ca'
                        }}
                        required
                    >
                        <option value="">Select Book Category</option>
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>
                        <option value="History">History</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="quantity" 
                        className="block font-medium"
                        style={{ color: '#4338ca' }}
                    >
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                        placeholder="Enter quantity"
                        min="0"
                        style={{ 
                            borderColor: '#008dff',
                            focusRingColor: '#4338ca'
                        }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="description" 
                        className="block font-medium"
                        style={{ color: '#4338ca' }}
                    >
                        Short Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                        placeholder="Write a brief description"
                        style={{ 
                            borderColor: '#008dff',
                            focusRingColor: '#4338ca'
                        }}
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="rating" 
                        className="block font-medium"
                        style={{ color: '#4338ca' }}
                    >
                        Rating
                    </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                        placeholder="Enter rating (1-5)"
                        min="1"
                        max="5"
                        step="0.1"
                        style={{ 
                            borderColor: '#008dff',
                            focusRingColor: '#4338ca'
                        }}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="image" 
                        className="block font-medium"
                        style={{ color: '#4338ca' }}
                    >
                        Book Cover Image URL
                    </label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                        placeholder="Enter image URL"
                        style={{ 
                            borderColor: '#008dff',
                            focusRingColor: '#4338ca'
                        }}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 rounded-md text-white font-semibold transition-all duration-300 hover:shadow-lg"
                    style={{ 
                        background: 'linear-gradient(to right, #4338ca, #008dff)',
                    }}
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBooks;