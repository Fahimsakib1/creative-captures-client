import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    console.log("User From My Reviews Page:", user);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold text-center mt-2 mb-4'>{reviews.length} Reviews of {user?.email}</h1>
            </div>

            <div>
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
            </div>

            <div className='text-center mt-24'>
                <Link to='/services'><button className='btn btn-primary px-8'>Back To Services Page</button></Link>
            </div>
        </div>
    );
};

export default MyReviews;