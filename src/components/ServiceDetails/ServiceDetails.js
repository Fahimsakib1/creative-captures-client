import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaClock, FaUserCircle } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import ReviewsOnCurrentPage from './ReviewsOnCurrentPage';



const ServiceDetails = () => {

    const { user } = useContext(AuthContext);

    const service = useLoaderData();
    const { _id, img, description, service_id, service_name, price, duration, ratting, review1, review1_date, review1_email, review2, review2_date, review2_email, total_booked } = service;

    console.log("Service ID from Service details Page:", service_id)


    const handleAddReview = (event) => {
        event.preventDefault();
        const review = event.target.review.value;
        const rating = event.target.rating.value;
        const email = user?.email || 'Unregistered User';
        const userName = user?.displayName || 'User Name not Added';
        console.log(review, email);

        //code for getting the review date
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const currentTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        // const reviewDate = [month, day, year + ' ' + hour + ' Hour ' + minute + ' Minute'].join('-');
        const MonthDateYear = [month, day, year].join('-');
        const reviewDate = MonthDateYear + ' ' + currentTime
        console.log(reviewDate);

        //review info object
        const reviewInfo = {
            service_id: service_id,
            service_name: service_name,
            service_img: img,
            service_rating: rating,
            email: email,
            servicePrice: price,
            review: review,
            userName: userName,
            reviewDate: reviewDate
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })

            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    console.log(data)
                    toast.success('Review Added Successfully')
                    event.target.reset();
                }

                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops... Review Not Added',
                        text: 'Something went wrong!'
                    })
                }
            })
            .catch(error => console.error(error))

    }



    const [reviewsByServiceId, setReviewsByServiceId] = useState({});

    console.log("ID from service Details Page", _id);

    const { review, email, service_img, service_rating, reviewDate } = reviewsByServiceId;
    console.log(reviewsByServiceId);





    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewss?service_id=${service_id}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [service_id, myReviews])

    console.log(myReviews)



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

                            <div>
                                {
                                    total_booked && <div className='bg-red-800 py-1 rounded-lg'><p className='text-white text-center text-lg'>Customers {total_booked} +</p></div>
                                }
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

                    <div>

                        {/* <div className="container flex flex-col w-full max-w-lg p-6 pt-0 mx-auto divide-y rounded-lg divide-gray-700 bg-gray-900 text-gray-100 mb-4">
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
                        </div> */}


                        {/* <div className="container flex flex-col w-full max-w-lg p-6 pt-0 mx-auto divide-y rounded-lg divide-gray-700 bg-gray-900 text-gray-100 mb-4">
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
                        </div> */}


                        {/* /showing the reviews below */}
                        
                        {
                            myReviews.length > 0 ?

                            <div>
                                {
                                    myReviews.map(rev => <ReviewsOnCurrentPage rev={rev} key={rev._id}></ReviewsOnCurrentPage>)
                                }

                            </div>

                            : 

                            <div className='mx-24'> 
                                <h1 className='text-3xl text-center mb-4'>No Reviews Found</h1>
                            </div>
                        }

                    </div>



                    <div>

                        {
                            user?.uid ?

                                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-gray-900 text-white sm:w-3/4 sm:mx-auto lg:w-full md:w-full md:mx-auto">
                                    <form
                                        onSubmit={handleAddReview}
                                        className="card-body">

                                        <div className="form-control">
                                            <input defaultValue={user?.email} readOnly name="email" type="text" placeholder="Enter Email" className="input input-bordered text-gray-500 text-bold" />
                                        </div>

                                        <div className="form-control mt-2">
                                            <input name="rating" type="text" placeholder="Service Rating" className="input input-bordered text-gray-500 text-bold" required/>
                                        </div>

                                        <div className='mt-2'>
                                            <textarea
                                                name="review"
                                                className="textarea textarea-bordered w-full pb-6 text-black" placeholder="Write Your Review" required></textarea>
                                        </div>

                                        <div className="form-control mt-2">
                                            <input type="submit" value="Add Review" className="btn btn-primary border-0 " />
                                        </div>
                                    </form>
                                </div>

                                :

                                <div>
                                    <h1 className='text-gray-600 text-center mt-8 text-3xl text-semibold'>Please Login To Add A Review</h1>
                                    <div className='mx-auto text-center'>
                                        <Link to='/login'><button className='btn btn-outline btn-primary px-16 mt-4'>Login</button></Link>
                                    </div>
                                </div>
                        }


                    </div>


                </div>

            </div>

            <div className='text-center mt-24'>
                <Link to='/services'><button className='btn btn-primary px-16'>Back</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;