import React from "react";

const BorrowedCard = ({ book }) => {
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
                    <button className="btn btn-error text-white">Return Book</button>
                </div>
            </div>
        </div>
    );
};

export default BorrowedCard;
