import React from "react";

const UpcomingEvents = () => {
    const events = [
        {
            id: 1,
            title: "Book Reading: Sci-Fi Classics",
            date: "2025-01-15",
            description: "Join us for an exciting book reading session featuring timeless Sci-Fi classics.",
        },
        {
            id: 2,
            title: "Author Meetup: Jane Smith",
            date: "2025-01-22",
            description: "Meet the renowned author Jane Smith and get insights into her writing process.",
        },
        {
            id: 3,
            title: "Library Workshop: Exploring Archives",
            date: "2025-02-05",
            description: "Learn how to explore and make the best use of our extensive library archives.",
        },
    ];

    return (
        <div className="max-w-screen-2xl mx-auto my-10 px-4 py-6 rounded-lg" style={{ backgroundColor: '#4338ca' }}>
            <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#ffffff' }}>
                Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-[#008dff] p-4 rounded-lg shadow transform hover:scale-105 transition duration-300" 
                        style={{ color: '#ffffff' }} 
                    >
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="mb-2"><strong>Date:</strong> {event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;