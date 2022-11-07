import React from 'react';
import pic1 from '../../../images/slider/slider-resized/1.png';
import pic2 from '../../../images/slider/slider-resized/2.png';
import pic3 from '../../../images/slider/slider-resized/3.png';
import pic4 from '../../../images/slider/slider-resized/4.png';
import pic5 from '../../../images/slider/slider-resized/5.png';
import pic6 from '../../../images/slider/slider-resized/6.png';
import './Slider.css';




const Slider = () => {
    return (
        <div className='px-16'>
            <div className="carousel w-full">
                
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={pic1} className="w-full rounded-md " alt="pic"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={pic2} className="w-full rounded-md"  alt="pic" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={pic3} className="w-full rounded-md"  alt="pic" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={pic4} className="w-full rounded-md"   alt="pic"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide5" className="carousel-item relative w-full">
                    <img src={pic5} className="w-full rounded-md"   alt="pic"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide6" className="carousel-item relative w-full">
                    <img src={pic6} className="w-full rounded-md"   alt="pic"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;