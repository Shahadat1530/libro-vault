import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBook = () => {
    const book = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedBook = {
            bookName: form.bookName.value,
            authorName: form.authorName.value,
            category: form.category.value,
            rating: parseFloat(form.rating.value),
            image: form.image.value,
        };

        fetch(`https://librovault-server.vercel.app/books/${book._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    });
                    navigate('/all-books');
                }
            });
        form.reset();
    };

    return (
        <div className="max-w-screen-lg mx-auto p-10 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Update Book Details</h2>
            <form onSubmit={handleUpdateBook}>
                <div className="mb-4">
                    <label htmlFor="bookName" className="block font-medium">Book Name</label>
                    <input
                        type="text"
                        id="bookName"
                        name="bookName"
                        defaultValue={book?.bookName}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="authorName" className="block font-medium">Author Name</label>
                    <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        defaultValue={book?.authorName}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block font-medium">Category</label>
                    <select
                        id="category"
                        name="category"
                        defaultValue={book?.category}
                        className="w-full px-4 py-2 border rounded"
                        required
                    >
                        <option value="">Select Your Category</option>
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>
                        <option value="History">History</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="rating" className="block font-medium">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        defaultValue={book?.rating}
                        className="w-full px-4 py-2 border rounded"
                        min="1"
                        max="5"
                        step="0.1"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block font-medium">Book Cover Image URL</label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        defaultValue={book?.image}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default UpdateBook;
