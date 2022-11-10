import React from 'react';
import { ImStarFull, ImBin } from "react-icons/im";
import { FaEdit } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const MyReviewTable = ({ myReview, handleDeleteReview }) => {

    const { email, review, servicePrice, service_id, service_img, service_name, service_rating, reviewDate, _id } = myReview;

    return (
        
        
        // <tr>
        //     <th>
        //         <label>
        //             <input type="checkbox" className="checkbox" />
        //         </label>
        //     </th>
        //     <td>
        //         <div className="flex items-center space-x-3">
        //             <div className="avatar">
        //                 <div className="mask mask-squircle w-12 h-12">
        //                     <img src={service_img} alt="Avatar Tailwind CSS Component" />
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="font-bold">{service_name}</div>
        //                 <div className='flex justify-center'>
        //                     <div className="text-sm opacity-50">
        //                         {service_rating}
        //                     </div>
        //                     <div className='flex'>
        //                         <ImStarFull className='text-lg ml-1 text-orange-500'></ImStarFull>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </td>
        //     <td className='w-1/2'>
        //         {review}
        //         <br />
        //         <span className="badge badge-ghost badge-sm">{email}</span>
        //     </td>
        //     <th>
        //         <button className="btn btn-primary btn-xs">Edit</button>
        //     </th>
        // </tr>

        

        <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100 rounded-xl">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center mx-auto">
                    <p className="mb-0 capitalize text-gray-100 text-xl">{service_name} Service</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={service_img} alt="" className="block object-cover object-center w-full rounded-md h-44 bg-gray-500" />
                    <div className="flex items-center text-xs justify-between lg:flex-row md:flex-row sm:flex-col flex-col">
                        <span className='text-md text-gray-100 text-md'>Date: {reviewDate}</span>
                        <div className='flex'>
                            <p className='text-md text-lg'>{service_rating}</p>
                            <ImStarFull className='text-orange-600 ml-2 mt-1 text-lg'></ImStarFull>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="leading-snug text-gray-400">{review}</p>
                </div>
            </div>

            <div className='mt-4 flex justify-around pb-0'>
                <div onClick={() => handleDeleteReview(_id, service_name)}>
                    <ImBin className='text-3xl text-red-600' title='Delete Review'>Delete</ImBin>
                </div>
                <div>
                    <Link to={`/updateReview/${_id}`}>
                        <FaEdit className='text-3xl text-blue-600' title='Edit Review'></FaEdit>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyReviewTable;