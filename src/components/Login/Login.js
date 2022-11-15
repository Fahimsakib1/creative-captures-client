import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login1 from '../../images/Login.jpg';
import login2 from '../../images/Login2.jpg';
import login3 from '../../images/login3.png';
import login4 from '../../images/login4.webp';
import login5 from '../../images/Login5.webp';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';



const Login = () => {

    const { loginUser, loading, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';



    useTitle('Login');

    console.log(loading);


    const [serviceLoader, setServiceLoader] = useState(false);



    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        //setLoading(true);
        
        
        loginUser(email, password)
            .then(result => {
                
                setServiceLoader(true)
                const user = result.user;
                console.log("User from Login page", user);
                
                const currentUser = {
                    email: user?.email
                }

                //get jwt token in client side
                
                //get jwt token in client side
                fetch('https://creative-captures-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })

                .then(res => res.json())
                    .then(data => {
                        console.log("Token received from server side", data.token)

                        //set the JWT token in local storage
                        localStorage.setItem('creative-token', data.token);
                        navigate(from, {replace: true});
                        setServiceLoader(false)
                    })

                // Swal.fire(
                //     'Good job!',
                //     'Login Successful',
                //     'success'
                // )
                toast.success('Login Successful')
                setError('');
                event.target.reset();
                //navigate(from, {replace: true});
                //setLoading(false);
                
            })

            .catch(error => {
                setError(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Login Failed',
                    text: 'Something went wrong!',
                })
            })
    }



    return (
        <div className="hero my-12">
            
            {
                serviceLoader && <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-black mx-auto mt-8"></div>
            }
            
            
            <div className="hero-content flex-col lg:flex-row-reverse grid md:grid-cols-2 gap-24">
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left">
                    <img className='w-full dark:rounded-lg dark:mt-6' src={login5} alt="" />
                </motion.div>
                

                <motion.div 
                initial={{ opacity: 0, scale: 2.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-gray-900 text-white sm:w-3/4 sm:mx-auto lg:w-full md:w-full md:mx-auto dark:bg-gray-800">
                    <h1 className="text-4xl font-bold text-center mt-6">Login</h1>

                    <form
                        onSubmit={handleLogin}
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

                        <div>
                            {error && <p className='text-red-600'>{error}</p>}
                        </div>

                        <div className="form-control">
                            <input type="submit" value="Login" className="btn btn-primary border-0 " />
                        </div>

                    </form>

                    <div className="flex items-center space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login With Social Accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>

                    <div className='text-center mb-6 mt-2'>
                        <p>New to this Website?  <Link to='/signup' className='text-orange-400 font-semibold'>Sign Up</Link></p>
                    </div>

                </motion.div>

            </div>
        </div>
    );
};

export default Login;