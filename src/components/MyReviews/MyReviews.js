import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';


const MyReviews = () => {

    
    useTitle('My Reviews')
    
    
    const { user } = useContext(AuthContext);
    console.log("User From My Reviews Page:", user);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDeleteReview = (id, name) => {
        const agree = window.confirm(`Are You sure you want to delete the review of ${name}`);
        if (agree) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingReviews = reviews.filter(rev => rev._id !== id);
                        setReviews(remainingReviews);
                        Swal.fire(
                            'Good job!',
                            'Review Deleted',
                            'success'
                        )
                    }
                })
        }
    }

    return (
        <div>
            {/* <div>
                <h1 className='text-2xl font-bold text-center mt-2 mb-8 text-blue-800'>{reviews.length} Reviews of {user?.email}</h1>
            </div> */}

            {/* <div>
                <div className="overflow-x-auto mb-24 w-full">
                    <table className="table w-full">

                        <thead>
                            <tr className=''>
                                <th className='text-red-600'>Action</th>
                                <th>User Name</th>
                                <th className='text-center'>Email</th>
                                <th className='text-center'>Registration Date</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>
                            {
                                reviews.map(myReview => <MyReviewTable key={myReview._id} myReview={myReview}></MyReviewTable>)
                            }
                        </tbody>

                    </table>
                </div>
            </div> */}


            {
                reviews.length > 0 ?

                    <div>
                        <div>
                            <h1 className='text-2xl font-bold text-center mt-2 mb-8 text-blue-800'>{reviews.length} Reviews of {user?.email}</h1>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8 px-12'>
                            {
                                reviews.map(myReview => <MyReviewTable key={myReview._id} myReview={myReview} handleDeleteReview={handleDeleteReview}></MyReviewTable>)
                            }
                        </div>
                    </div>

                    :

                    <div>
                        {
                            user?.email ?
                                <div className='mx-auto my-44'>
                                    <h2 className='text-4xl text-gray-600 text-center'>No Reviews Are Added By {user?.email}</h2>
                                </div>
                                :

                                <div className='mx-auto my-44'>
                                    <h2 className='text-4xl text-gray-600 text-center'>No Reviews Are Added By {user?.displayName}</h2>
                                </div>
                        }
                    </div>
            }


            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8 px-12'>
                {
                    reviews.map(myReview => <MyReviewTable key={myReview._id} myReview={myReview}></MyReviewTable>)
                }
            </div> */}

            <div className='text-center mt-16'>
                <Link to='/services'><button className='btn btn-outline btn-primary px-8'>Back To Services Page</button></Link>
            </div>
        </div>
    );
};

export default MyReviews;