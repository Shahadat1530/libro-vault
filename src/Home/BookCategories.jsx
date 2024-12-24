import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCategories = () => {
    const navigate = useNavigate();

    const categories = [
        { name: "Novel", image: "https://via.placeholder.com/150?text=Novel" },
        { name: "Thriller", image: "https://via.placeholder.com/150?text=Thriller" },
        { name: "History", image: "https://via.placeholder.com/150?text=History" },
        { name: "Sci-Fi", image: "https://via.placeholder.com/150?text=Sci-Fi" },
    ];

    const handleCategoryClick = (category) => {
        navigate(`/categories/${category}`);
    };

    return (
        <div className="max-w-screen-2xl mx-auto p-10">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Book Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        onClick={() => handleCategoryClick(category.name)}
                        className="border p-4 rounded shadow-lg hover:shadow-xl transition cursor-pointer text-center hover:scale-125"
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCategories;
