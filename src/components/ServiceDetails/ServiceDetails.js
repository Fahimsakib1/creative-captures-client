import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaClock, FaUserCircle } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {

    const { user } = useContext(AuthContext);

    const service = useLoaderData();
    const { _id, img, description, service_name, price, duration, ratting, review1, review1_date, review1_email, review2, review2_date, review2_email } = service;


    return (
        <div>
            <div>
                <h3 className='text-center text-3xl  mb-4 text-bold bg-gray-800 text-gray-100 w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/2 mx-auto pt-2 pb-3 rounded-xl'>Details of {service_name}</h3>
            </div>

            <div className='flex justify-evenly mt-8 lg:flex-row md:flex-col sm:flex-col flex-col'>

                <div className=''>
                    <div className="card card-compact w-80 sm:w-80 md:w-96 lg:w-96 bg-base-100 shadow-2xl mb-4 mx-auto">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <h2 className="card-title text-blue-700 text-xl">{service_name}</h2>
                            </div>

                            <p>{description}</p>

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
                        </div>
                    </div>
                </div>



                <div className='mb:mt-4 lg:mt-0 sm:mt-4 mt-4'>

                    <div className="container flex flex-col w-full max-w-lg p-6 pt-0 mx-auto divide-y rounded-lg divide-gray-700 bg-gray-900 text-gray-100 mb-4">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    {
                                        user?.photoURL ? <img src={user.photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                            :
                                            <FaUserCircle className='w-12 h-12 rounded-full'></FaUserCircle>
                                    }
                                </div>
                                <div>
                                    <h4 className="font-bold">{review1_email}</h4>
                                    <span className="text-xs text-gray-400">Date: {review1_date}</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">{ratting}</span>
                            </div>
                        </div>
                        <div className="px-4 pt-2 space-y-2 text-sm text-gray-400">
                            <p>{review1}</p>
                        </div>
                    </div>


                    <div className="container flex flex-col w-full max-w-lg p-6 pt-0 mx-auto divide-y rounded-lg divide-gray-700 bg-gray-900 text-gray-100 mb-4">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    {
                                        user?.photoURL ? <img src={user.photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                            :
                                            <FaUserCircle className='w-12 h-12 rounded-full'></FaUserCircle>
                                    }
                                </div>
                                <div>
                                    <h4 className="font-bold">{review2_email}</h4>
                                    <span className="text-xs text-gray-400">Date: {review2_date}</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="px-4 pt-2 space-y-2 text-sm text-gray-400">
                            <p>{review2}</p>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default ServiceDetails;