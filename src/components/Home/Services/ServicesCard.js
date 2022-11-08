import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";

const ServicesCard = ({ service }) => {

    const { img, description, service_name, price, duration, ratting } = service;

    return (
        <div>
            <div className="card card-compact w-80 sm:w-80 md:w-96 lg:w-96 bg-base-100 shadow-2xl mb-8 mx-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title text-blue-700 text-xl">{service_name}</h2>
                    </div>

                    <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>

                    <div className='flex justify-between'>
                        
                        <div className='flex align-center justify-center'>
                            <FaClock className='my-auto text-xl pr-2'></FaClock>
                            <p className="text-md font-bold text-black">{duration}</p>
                        </div>

                        <div className='text-black font-bold'>
                            <p>Price: {price}</p>
                        </div>

                        <div className='flex'>
                            <p className='text-black font-bold'>Rating: {ratting} </p>
                            <ImStarFull className='text-lg ml-1 text-orange-500'></ImStarFull>
                        </div>

                    </div>

                    <div className="card-actions flex justify-between mt-4 mb-2 mx-auto">
                        <Link><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;