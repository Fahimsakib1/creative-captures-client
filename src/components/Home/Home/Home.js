import React from 'react';
import Features from '../Features/Features';
import Slider from '../Slider/Slider';
import CustomerFeedBack from './CustomerFeedback/CustomerFeedBack';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Features></Features>
            <CustomerFeedBack></CustomerFeedBack>
        </div>
    );
};

export default Home;