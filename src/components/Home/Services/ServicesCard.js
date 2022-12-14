import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaClock } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { motion } from 'framer-motion';

const ServicesCard = ({ service }) => {

    const { _id, img, description, service_name, price, duration, ratting } = service;

    // card card-compact w-[300px] sm:w-[450px] md:w-80 lg:w-96 bg-base-100 shadow-2xl mb-4 mx-auto    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-blue-200 duration-300 hover:rounded-xl rounded-xl 


    return (
        <div className=''>
            
            <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card card-compact w-[300px] sm:w-[350px] md:w-80 lg:w-96 bg-base-100 shadow-2xl mb-4 sm:mx-0 mx-0 md:mx-auto  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-blue-200 duration-300 hover:rounded-xl rounded-xl dark:bg-gray-800">

                <PhotoProvider>
                    <PhotoView src={img} className='w-full'>
                        <img className='h-64 rounded-lg sm:w-[350px] md:w-full w-[300px]' src={img} alt="ServiceImage" />
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body sm:w-3/4 md:w-full w-3/4">
                    <div className='flex justify-between'>
                        <h2 className="card-title text-blue-700 text-xl">{service_name}</h2>
                    </div>

                    <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>

                    <div className='flex justify-between lg:flex-row md:flex-row sm:flex-col flex-col dark:text-white'>

                        <div className='flex align-center justify-center '>
                            <FaClock className='my-auto text-xl pr-2'></FaClock>
                            <p className="text-md font-bold text-black dark:text-blue-700">{duration}</p>
                        </div>

                        <div className='text-black font-bold'>
                            <p className='dark:text-blue-700'>Price: {price} <span className='font-bold dark:text-blue-700'> Taka</span></p>
                        </div>

                        <div className='flex'>
                            <div className=''>
                                <p className='text-black font-bold dark:text-blue-700'>Rating: {ratting} </p>
                            </div>
                            <div className=''>
                                <ImStarFull className='text-lg ml-1 text-orange-500'></ImStarFull>
                            </div>
                        </div>

                    </div>

                    <div className="card-actions flex justify-between mt-4 mb-2 mx-auto">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary dark:bg-purple-800">View Details</button></Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ServicesCard;