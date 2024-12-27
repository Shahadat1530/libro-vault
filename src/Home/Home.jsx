import React from 'react';
import Banner from './Banner';
import BookCategories from './BookCategories';
import UpcomingEvents from './UpcomingEvents';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default Home;