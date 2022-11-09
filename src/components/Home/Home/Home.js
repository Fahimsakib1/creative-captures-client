import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Features from '../Features/Features';
import Feedback from '../Feedback/Feedback';
import LearnPhotography from '../LearnPhotography/LearnPhotography';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';


const Home = () => {
    useTitle('Home')
    
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Features></Features>
            <Feedback></Feedback>
            <LearnPhotography></LearnPhotography>
        </div>
    );
};

export default Home;