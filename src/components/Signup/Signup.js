import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../images/Login2.jpg';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const Signup = () => {

    const { createUser, laoding, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');



    useTitle('Signup')

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        setLoading(true);

        if(password.length < 6){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must Be More Than 6 Characters Long... Try Again',
            })
        }


        
        createUser(email, password)
            .then(result => {

                const user = result.user;
                console.log("User from sign up page", user);

                Swal.fire(
                    'Good job!',
                    'User Created Successfully',
                    'success'
                )

                setError('')
                event.target.reset();
                setLoading(false);
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


    return (
        <div className="hero mb-12">
            <div className="hero-content flex-col lg:flex-row-reverse grid md:grid-cols-2 gap-24">
                <div className="text-center lg:text-left">
                    <img className='w-full' src={signup} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-gray-900 text-white sm:w-3/4 sm:mx-auto lg:w-full md:w-full md:mx-auto">
                    <h1 className="text-4xl font-bold text-center mt-6">Sign Up</h1>

                    <form
                        onSubmit={handleSignUp}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-600">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter Name" className="input input-bordered text-black" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-600">Email Address</span>
                            </label>
                            <input name="email" type="text" placeholder="Enter Email" className="input input-bordered text-black" required />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
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

                    <div className="flex items-center space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>

                    <div className='text-center mb-4'>
                        <p>Already have an account?  <Link to='/login' className='text-blue-600 font-semibold'>Login</Link></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Signup;