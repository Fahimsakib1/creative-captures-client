import React from 'react';
import { ImStarFull } from "react-icons/im";

const MyReviewTable = ({ myReview }) => {

    const { email, review, servicePrice, service_id, service_img, service_name, service_rating } = myReview;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={service_img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service_name}</div>
                        <div className='flex justify-center'>
                            <div className="text-sm opacity-50">
                                {service_rating}
                            </div>
                            <div className='flex'>
                                <ImStarFull className='text-lg ml-1 text-orange-500'></ImStarFull>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td className='w-1/2'>
                {review}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <th>
                <button className="btn btn-primary btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default MyReviewTable;