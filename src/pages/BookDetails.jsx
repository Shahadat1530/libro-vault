import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const BookDetails = () => {
    const { user } = useAuth();
    const book = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBorrowBook = (e) => {
        e.preventDefault();
        const form = e.target;

        const borrowedBook = {
            bookID: book._id,
            bookName: book.bookName,
            borrowerName: form.borrowerName.value,
            borrowerEmail: form.borrowerEmail.value,
            returnDate: form.returnDate.value,
        };

        console.log("Borrowed Book Data:", borrowedBook);
        // Here you can send the `borrowedBook` data to the server via a POST request.

        setIsModalOpen(false); 
    };

    return (
        <div className="max-w-screen-lg mx-auto p-10">
            <h2 className="text-3xl font-bold text-center mb-6">{book.bookName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <img
                        src={book.image}
                        alt={book.bookName}
                        className="w-full h-80 object-cover rounded"
                    />
                </div>

                <div>
                    <p className="text-lg"><strong>Author:</strong> {book.authorName}</p>
                    <p className="text-lg"><strong>Category:</strong> {book.category}</p>
                    <p className="text-lg"><strong>Quantity Available:</strong> {book.quantity}</p>
                    <p className="text-lg"><strong>Rating:</strong> {book.rating}</p>
                    <p className="text-lg"><strong>Description:</strong> {book.description}</p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        disabled={book.quantity === 0}
                        className={`mt-4 px-6 py-2 rounded text-white ${book.quantity > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {book.quantity > 0 ? "Borrow" : "Out of Stock"}
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4">Borrow Book</h3>
                        <form onSubmit={handleBorrowBook}>
                            <div className="mb-4">
                                <label htmlFor="borrowerName" className="block font-medium">Name</label>
                                <input
                                    type="text"
                                    id="borrowerName"
                                    name="borrowerName"
                                    defaultValue={user?.displayName}
                                    disabled
                                    className="w-full px-4 py-2 border rounded"
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="borrowerEmail" className="block font-medium">Email</label>
                                <input
                                    type="email"
                                    id="borrowerEmail"
                                    name="borrowerEmail"
                                    defaultValue={user?.email}
                                    disabled
                                    className="w-full px-4 py-2 border rounded"
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="returnDate" className="block font-medium">Return Date</label>
                                <input
                                    type="date"
                                    id="returnDate"
                                    name="returnDate"
                                    className="w-full px-4 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="mr-4 px-4 py-2 rounded bg-gray-400 text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Confirm Borrow
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetails;
