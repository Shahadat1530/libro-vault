import React from "react";
import Swal from "sweetalert2";

const BorrowedCard = ({ book, onDelete }) => {

    const handleDelete = (id, bookId) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://librovault-server.vercel.app/borrowed-books/${id}?bookId=${bookId}`, {
                    method: 'DELETE',
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
                    })
            }
        });
    };

    return (
        <div className="card w-full bg-base-100 shadow-xl mx-auto my-4">
            <figure>
                <img src={book.bookImage} alt={book.bookName} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.bookName}</h2>
                <p className="text-gray-600"><strong>Author:</strong> <span className="font-semibold">{book.bookAuthor}</span></p>
                <p className="text-gray-600"><strong>Category:</strong> <span className="font-semibold">{book.bookCategory}</span></p>
                <p className="text-red-500"><strong>Return By:</strong> <span className="font-semibold">{book.returnDate}</span></p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(book._id, book.bookId)} className="btn btn-error text-white">Return Book</button>
                </div>
            </div>
        </div>
    );
};

export default BorrowedCard;
