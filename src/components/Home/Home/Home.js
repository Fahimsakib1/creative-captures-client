import React from 'react';
import Features from '../Features/Features';
import Feedback from '../Feedback/Feedback';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Features></Features>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;