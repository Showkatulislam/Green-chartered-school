import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/Hero';
import AboutSchool from '../components/AboutUs';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSlider />
            <AboutSchool/>
        </div>
    );
};

export default Home;