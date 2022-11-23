import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { FaClock, FaUserCircle } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import ReviewsOnCurrentPage from './ReviewsOnCurrentPage';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails1 = () => {


    const { user } = useContext(AuthContext);


    useTitle('Service Details')

    const service = useLoaderData();
    const { _id, img, description, service_id, service_name, price, duration, ratting, total_booked } = service;

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
            reviewDate: reviewDate,
            photoURL: user?.photoURL
        }

        fetch('https://creative-captures-server.vercel.app/reviews', {
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
        fetch(`https://creative-captures-server.vercel.app/reviewss?service_id=${service_id}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                console.log(data)
            })
    }, [service_id, myReviews])

    console.log(myReviews)



    return (
        <div>
            <div>
                <h3 className='text-center text-3xl  mb-4 text-bold bg-gray-800 text-gray-100 w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/2 mx-auto pt-2 pb-3 rounded-xl'>Details of {service_name}</h3>
            </div>

            <PhotoProvider>
                <PhotoView src={img} className='w-full'>
                    {/* <img className='h-64 rounded-lg sm:w-[350px] md:w-full w-[300px]' src={img} alt="ServiceImage" /> */}
                    <img className='rounded-xl mx-auto mt-12 mb-4' src={img} alt="Shoes" />
                </PhotoView>
            </PhotoProvider>

            {/* <img className='rounded-xl mx-auto mt-12 mb-4' src={img} alt="Shoes" /> */}

            <div className='mx-auto text-center w-full md:w-3/4 lg:w-3/4 bg-gray-800 text-white px-10 py-4 rounded-lg dark:border-2 dark:border-blue-800 mt-8'>
                <p className='text-xl'>{description}</p>
            </div>

            <div className='flex justify-evenly mt-8 flex-col md:flex-row md:mx-0 sm:mx-16 mx-16'>

                <div className='flex align-center justify-center bg-blue-900 px-12 py-4 rounded-lg text-xl dark:bg-green-800  mb-8 sm:mb-8  md:mb-0'>
                    <FaClock className='my-auto text-xl pr-2 text-white '></FaClock>
                    <p className="text-md font-bold text-white dark:text-white ">{duration}</p>
                </div>

                <div className='flex align-center justify-center bg-blue-900 px-12 py-4 rounded-lg text-xl dark:bg-green-800  mb-8 sm:mb-8  md:mb-0'>
                    <p className="text-md font-bold text-white dark:text-white ">Price: {price} Taka</p>
                </div>

                <div className='flex align-center justify-center bg-blue-900 px-12 py-4 rounded-lg text-xl dark:bg-green-800  mb-8 sm:mb-8  md:mb-0'>
                    <p className='text-md font-bold text-white dark:text-white '>Rating: <span className='dark:text-white'>{ratting}</span> </p>
                    <ImStarFull className='text-xl ml-1 text-orange-500 mt-1'></ImStarFull>
                </div>
            </div>



            <div className='mt-12'>

                <div>


                    {/* /showing the reviews below */}
                    {
                        myReviews.length > 0 ?

                            <div className='lg:mx-0 md:mx-2 sm:mx-2 mx-2'>
                                {
                                    myReviews.map(rev => <ReviewsOnCurrentPage rev={rev} key={rev._id}></ReviewsOnCurrentPage>)
                                }

                            </div>

                            :

                            <div className='mx-24  rounded-lg py-1'>
                                <h1 className='text-3xl text-center mb-4'>No Reviews Found</h1>
                            </div>
                    }

                </div> 



                <div className='lg:mx-0 md:mx-2 sm:mx-2 mx-2'>

                    {
                        user?.uid ?

                            <div className="card flex-shrink-0 max-w-2xl shadow-2xl bg-gray-900 text-white sm:mx-auto lg:w-full md:w-full 
                            sm:w-full
                            md:mx-auto dark:bg-gray-800 mx-auto mt-8 w-full">
                                <form
                                    onSubmit={handleAddReview}
                                    className="card-body">

                                    <div className="form-control">
                                        <input defaultValue={user?.email} readOnly name="email" type="text" placeholder="Enter Email" className="input input-bordered text-gray-500 text-bold" />
                                    </div>

                                    <div className="form-control mt-2">
                                        <input name="rating" type="text" placeholder="Service Rating" className="input input-bordered text-gray-500 text-bold" required />
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

            <div className='text-center mt-24'>
                <Link to='/services'><button className='btn bg-green-600 px-16 border-0'>Back</button></Link>
            </div>

        </div>
    );
};

export default ServiceDetails1;