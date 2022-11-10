import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaClock } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ service }) => {

    const { _id, img, description, service_name, price, duration, ratting } = service;


    return (
        <div>
            <div className="card card-compact w-fit sm:w-96 md:w-96 lg:w-96 bg-base-100 shadow-2xl mb-4 mx-auto    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-blue-200 duration-300 hover:rounded-xl rounded-xl ">

                <PhotoProvider>
                    <PhotoView src={img} className='w-full'>
                        <img className='h-64' src={img} alt="ServiceImage" />
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title text-blue-700 text-xl">{service_name}</h2>
                    </div>

                    <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>

                    <div className='flex justify-between lg:flex-row md:flex-row sm:flex-col flex-col'>

                        <div className='flex align-center justify-center'>
                            <FaClock className='my-auto text-xl pr-2'></FaClock>
                            <p className="text-md font-bold text-black">{duration}</p>
                        </div>

                        <div className='text-black font-bold'>
                            <p>Price: {price}</p>
                        </div>

                        <div className='flex'>
                            <div className=''>
                                <p className='text-black font-bold'>Rating: {ratting} </p>
                            </div>
                            <div className=''>
                                <ImStarFull className='text-lg ml-1 text-orange-500'></ImStarFull>
                            </div>
                        </div>

                    </div>

                    <div className="card-actions flex justify-between mt-4 mb-2 mx-auto">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;