import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';





const UpdateReview = () => {

    const updateReview = useLoaderData();
    console.log("Initial Review properties by loader", updateReview);

    const { user } = useContext(AuthContext)

    // const { email, review, reviewDate, servicePrice, service_id, service_img, service_name, service_rating, _id } = updateReview;


    useTitle('Update Review')


    //code for getting the review time and date
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1;
    // const day = date.getDate();
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    // const newReviewDate = [month, day, year + ' ' + hour + ' Hour ' + minute + ' Minute'].join('-');
    // console.log(newReviewDate);




    //code for getting the review date
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const currentTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const MonthDateYear = [month, day, year].join('-');
    const newReviewDate = MonthDateYear + ' ' + currentTime
    console.log(newReviewDate);



    const [newUpdate, setNewUpdate] = useState(updateReview)



    const handleUpdateReview = (event) => {
        event.preventDefault();
        const rating = event.target.rating.value;
        const review = event.target.review.value;
        console.group(rating, review);

        const updateInfo = {
            review: review,
            reviewDate: newReviewDate,
            service_rating: rating,
        }

        fetch(`http://localhost:5000/reviews/${updateReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateInfo)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Your Review is Updated',
                        'success'
                    )
                    console.log("Updated Review Data", data)
                    setNewUpdate(updateInfo);
                    event.target.reset();
                }
            })

            //console.log("Inside the Update review function", newUpdate)

    }

    console.log("Outside the Update review function", newUpdate)



    const {review, reviewDate,  service_rating} = newUpdate;







    return (

        <div>
            <div>

                <div className="container flex flex-col w-full max-w-lg p-6 pt-0 mx-auto divide-y rounded-lg divide-gray-700 bg-gray-900 text-gray-100 mb-4">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div className=''>
                                <div className='flex justify-around align-center'>
                                    <h4 className="font-bold my-auto mr-2 ">Your Review For {updateReview.service_name}</h4>
                                    <img src={updateReview.service_img} alt="" className="object-cover w-16 h-16 bg-gray-500 ml-2" />
                                </div>
                                <span className="text-xs text-gray-400">Date: {reviewDate}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-yellow-500 -mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            {/* <span className="text-xl font-bold">{parseFloat(service_rating) + 0.1}</span> */}
                            <span className="text-xl font-bold">{service_rating}</span>
                        </div>
                    </div>
                    <div className="px-4 pt-2 space-y-2 text-sm text-gray-400">
                        <p>{review}</p>
                    </div>
                </div>




                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-gray-900 text-white sm:w-3/4 sm:mx-auto lg:w-full md:w-full md:mx-auto">
                    <form
                        onSubmit={handleUpdateReview}
                        className="card-body">

                        <div className="form-control">
                            <input defaultValue={user?.email} readOnly name="text" type="text" placeholder="User Email" className="input input-bordered text-gray-500 text-bold" />
                        </div>

                        <div className="form-control">
                            <input name="rating" type="text" placeholder="Update Service Rating" className="input input-bordered text-gray-500 text-bold" required />
                        </div>

                        <div className='mt-2'>
                            <textarea
                                name="review"
                                className="textarea textarea-bordered w-full pb-6 text-black" placeholder="Update Your Review" required></textarea>
                        </div>

                        <div className="form-control mt-2">
                            <input type="submit" value="Update Review" className="btn btn-primary border-0 " />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateReview;