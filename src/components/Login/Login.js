import React from 'react';
import { Link } from 'react-router-dom';
import login1 from '../../images/Login.jpg';
import login2 from '../../images/Login2.jpg';
import login3 from '../../images/login3.png';
import login4 from '../../images/login4.webp';
import login5 from '../../images/Login5.webp';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row-reverse grid md:grid-cols-2 gap-24">
                <div className="text-center lg:text-left">
                    <img className='w-full' src={login5} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-900 text-white sm:w-3/4 sm:mx-auto lg:w-full md:w-full md:mx-auto">
                    <h1 className="text-4xl font-bold text-center mt-6">Login</h1>

                    <form
                        className="card-body">

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
                            <Link className="label-text text-white hover:text-blue-600 mt-2 ml-1">Forgot password?</Link>
                        </div>

                        {/* <div>
                        {error && <p className='text-red-600'>{error}</p>}
                    </div> */}

                        <div className="form-control">
                            <input type="submit" value="Login" className="btn btn-primary border-0 " />
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

                    <div className='text-center mb-6 mt-2'>
                        <p>New to this Website?  <Link to='/signup' className='text-orange-400 font-semibold'>Sign Up</Link></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;