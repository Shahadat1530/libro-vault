import React from "react";
import Swal from "sweetalert2";

const BorrowedCard = ({ book, onDelete }) => {
    const handleDelete = (id, bookId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4338ca",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://librovault-server.vercel.app/borrowed-books/${id}?bookId=${bookId}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Returned!",
                                text: "Book has been returned.",
                                icon: "success",
                            });
                            if (onDelete) {
                                onDelete(id);
                            }
                        }
                    });
            }
        });
    };

    return (
        <div className="w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden mx-auto my-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            {/* Book Image Section with Padding & Hover Effect */}
            <div className="p-6 bg-gradient-to-b from-[#f0f4ff] to-white flex justify-center">
                <img
                    src={book.bookImage}
                    alt={book.bookName}
                    className="object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Card Body */}
            <div className="p-5 text-center">
                <h2 className="text-2xl font-bold text-[#4338ca]">{book.bookName}</h2>
                <p className="text-gray-700 mt-2">
                    <strong>Author:</strong> <span className="font-medium text-[#008dff]">{book.bookAuthor}</span>
                </p>
                <p className="text-gray-700">
                    <strong>Category:</strong> <span className="font-medium text-[#008dff]">{book.bookCategory}</span>
                </p>
                <p className="text-red-500">
                    <strong>Return By:</strong> <span className="font-semibold">{book.returnDate}</span>
                </p>
            </div>

            {/* Footer - Gradient Background & Button Hover Effect */}
            <div className="p-4 bg-gradient-to-r from-[#4338ca] via-[#008dff] to-[#00c9f5] flex justify-center">
                <button
                    onClick={() => handleDelete(book._id, book.bookId)}
                    className="bg-white text-[#4338ca] hover:bg-[#58fbda] hover:text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                    Return Book
                </button>
            </div>
        </div>
    );
};

export default BorrowedCard;
