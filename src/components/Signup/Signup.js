import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../images/Login2.jpg';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';
import { tokenFunction } from '../../JWTTokenFunction/JWTTokenFunction';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';



const Signup = () => {

    const { createUser, loading, setLoading, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');


    //loader
    const [serviceLoader, setServiceLoader] = useState(false);

    //navigate
    const navigate = useNavigate();

    //changing the page title 
    useTitle('Signup')


    //signup function
    const handleSignUp = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, photoURL, email, password);


        if (password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must Be More Than 6 Characters Long... Try Again',
            })
        }



        createUser(email, password)
            .then(result => {

                setServiceLoader(true)
                const user = result.user;
                console.log("User from sign up page", user);

                tokenFunction(user);

                Swal.fire(
                    'Great!',
                    `${name} You are signed up successfully`,
                    'success'
                )

                handleUpdateUserProfile(name, photoURL);
                setError('')
                event.target.reset();
                navigate('/login');
                setServiceLoader(false);
                //toast.success(`${name} You are signed up successfully`)
            })

            .catch(error => {
                setError(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Sign Up Failed',
                    text: 'Something went wrong!',
                })
            })

    }




    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div className="hero mb-12">


            {
                serviceLoader && <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-black mx-auto mt-8"></div>
            }


            <div className="hero-content flex-col lg:flex-row-reverse grid md:grid-cols-2 gap-24">

                <motion.div
                    initial={{ opacity: 0, scale: 2.5 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.5 }}

                    className="text-center lg:text-left">
                    <img className='w-full dark:rounded-lg -mt-32' src={signup} alt="" />
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                
                className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-gray-900 text-white sm:w-3/4 sm:mx-auto lg:w-full md:w-full md:mx-auto dark:bg-gray-800">
                    <h1 className="text-4xl font-bold text-center mt-6">Sign Up</h1>

                    <form
                        onSubmit={handleSignUp}
                        className="card-body">

                        <div className="form-control">
                            <label className="label p-1">
                                <span className="label-text font-bold text-blue-600">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter Name" className="input input-bordered text-black" required />
                        </div>

                        <div className="form-control">
                            <label className="label p-1">
                                <span className="label-text font-bold text-blue-600">Photo URL</span>
                            </label>
                            <input name="photoURL" type="text" placeholder="Enter Photo URL" className="input input-bordered text-black" required />
                        </div>


                        <div className="form-control">
                            <label className="label p-1">
                                <span className="label-text font-bold text-blue-600">Email Address</span>
                            </label>
                            <input name="email" type="text" placeholder="Enter Email" className="input input-bordered text-black" required />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label p-1">
                                <span className="label-text font-bold text-blue-600">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Enter Password" className="input input-bordered text-black" required />
                        </div>

                        {
                            error && <p className='text-red-700'>{error}</p>
                        }

                        <div className="form-control">
                            <input type="submit" value="Sign Up" className="btn btn-primary bg-orange-600  border-0 " />
                        </div>

                    </form>

                    <div className="flex items-center space-x-1 -mt-4">
                        <div className="flex-1 h-px sm:w-16 bg-white"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login With Social Accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-white"></div>
                    </div>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>

                    <div className='text-center mb-4'>
                        <p>Already have an account?  <Link to='/login' className='text-blue-600 font-semibold'>Login</Link></p>
                    </div>

                </motion.div>

            </div>
        </div>
    );
};

export default Signup;