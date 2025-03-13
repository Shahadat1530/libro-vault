import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCategories = () => {
    const navigate = useNavigate();

    const categories = [
        { name: "Novel", image: "https://img.freepik.com/free-photo/beautiful-composition-different-books_23-2148883808.jpg?uid=R174965789&ga=GA1.1.76953405.1704461102&semt=ais_hybrid" },
        { name: "Thriller", image: "https://img.freepik.com/free-photo/man-walks-along-road-forest-fog-view-from-back-generative-al_169016-28620.jpg?uid=R174965789&ga=GA1.1.76953405.1704461102&semt=ais_hybrid" },
        { name: "History", image: "https://img.freepik.com/free-photo/elevated-view-burnt-paper-pen-ink-bottle_23-2147837106.jpg?uid=R174965789&ga=GA1.1.76953405.1704461102&semt=ais_hybrid" },
        { name: "Sci-Fi", image: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?uid=R174965789&ga=GA1.1.76953405.1704461102&semt=ais_hybrid" },
    ];

    const handleCategoryClick = (category) => {
        navigate(`/categories/${category}`);
    };

    return (
        <div className="max-w-screen-2xl mx-auto p-10">
            <h2 className="text-4xl font-bold text-center text-[#4338ca] mb-8">Explore Book Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        onClick={() => handleCategoryClick(category.name)}
                        className="border p-4 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer text-center hover:scale-105 bg-[#fcf7ff] hover:bg-[#fffade]"
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-56 object-cover mb-4 rounded-lg border-2 border-[#978ab5]"
                        />
                        <h3 className="text-2xl font-semibold text-[#4338ca]">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCategories;
