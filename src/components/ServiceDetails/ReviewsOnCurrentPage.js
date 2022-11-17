import React, { useContext, useState } from 'react';
import { FaClock, FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';



const ReviewsOnCurrentPage = ({ rev }) => {

    const { user } = useContext(AuthContext);
    console.log("User from Service Details Page: ", user)

    const { service_name, service_img, service_rating, email, servicePrice, review, reviewDate, photoURL } = rev;


    //const [userPhoto, setUserPhoto] = useState(user?.photoURL);

    return (
        <div>
            <div className="container flex flex-col max-w-2xl p-6 pt-0 mx-auto divide-y rounded-lg divide-gray-700 bg-gray-900 text-gray-100 mb-4  dark:bg-gray-800 lg:w-full md:w-full sm:w-3/4 w-3/4 mt-16">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        
                        <div>
                            {
                                user?.uid ? 
                                
                                <img src={photoURL} alt="" className="object-cover w-14 h-14 rounded-full bg-gray-500 " />
                                    :
                                    <FaUserCircle className='w-14 h-14 rounded-full'></FaUserCircle>
                            }
                        </div>

                        <div>
                            <h4 className="font-bold">{email}</h4>
                            <span className="text-xs text-gray-400">Date: {reviewDate}</span>
                        </div>

                    </div>

                    <div className="flex items-center space-x-2 text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold ml-8">{service_rating}</span>
                    </div>

                </div>

                <div className="px-4 pt-2 space-y-2 text-sm text-gray-400">
                    <p>{review}</p>
                </div>

            </div>
        </div>
    );
};

export default ReviewsOnCurrentPage;