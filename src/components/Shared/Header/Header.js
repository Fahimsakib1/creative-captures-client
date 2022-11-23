import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.PNG';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { BsSun, BsMoon } from 'react-icons/bs';



const Header = () => {


    const { user, logoutUser, theme, ThemeChange, setTheme } = useContext(AuthContext);

    const handleLogOut = () => {
        logoutUser()
            .then(() => {

            })

            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Logout Failed!'
                })
            })
    }



    const handleThemeSwitch = () => {
        ThemeChange();
    }


    const menuItems =
        <>
            <div className='flex lg:flex-row md:flex-col sm:flex-col flex-col'>
                <div className="avatar">
                    <div className="w-12 mr-2">
                        <img className='rounded-lg' src={logo} alt="logo" />
                    </div>
                </div>
                <li className='font-bold lg:text-xl md:text-xl sm:text-lg text-md uppercase text-blue-700 -ml-4 mr-2'> <Link to='/'>Creative Captures</Link></li>
            </div>

            <li className='font-semibold mr-2 dark:text-white  dark:hover:text-orange-400'> <Link to='/'>Home</Link></li>
            <li className='font-semibold mr-2 dark:text-white dark:hover:text-orange-400'> <Link to='/blogs'>Blogs</Link></li>
            <li className='font-semibold mr-2 dark:text-white dark:hover:text-orange-400'> <Link to='/services'>All Services</Link></li>


            {
                user?.uid ?
                    <>
                        <li className='font-semibold mr-2 dark:text-white dark:hover:text-orange-400'> <Link to='/myReviews'>My Reviews</Link></li>
                        <li className='font-semibold mr-2 dark:text-white dark:hover:text-orange-400'> <Link to='/addService'>Add Service</Link></li>
                        <p className='text-blue-800 font-semibold my-auto dark:text-green-600'>Welcome, {user.email ? user.email : user.displayName}</p>
                    </>

                    :
                    <>
                        <li className='font-bold text-green-600'> <Link to='/login'>Login</Link></li>

                        <li className='font-bold text-blue-800'> <Link to='/signup'>Sign Up</Link></li>
                    </>
            }

            {
                user?.uid && <div>
                    <Link to='/'> <button onClick={handleLogOut} className='btn btn-outline btn-error ml-3 sm:mt-2 lg:mt-0 md:mt-0 mt-2'>Logout</button></Link>
                </div>
            }

            {/* <input onClick={handleThemeSwitch} type="checkbox" className="toggle toggle-md my-auto ml-4 sm:mt-2 md:mt-2 lg:mt-3 mt-4 bg-black" title={theme === "dark" ? 'Light Mode' : 'Dark Mode'} /> */}

            {
                theme === 'dark' ?
                    <BsMoon onClick={handleThemeSwitch} className=" my-auto ml-8 mr-8 sm:mt-3 md:mt-3 lg:mt-2 mt-2 text-3xl mb-4 sm:mb-4 md:mb-4 lg:mb-0" title='Click For Light Mode' ></BsMoon>
                    :
                    <BsSun onClick={handleThemeSwitch} className=" my-auto ml-4 sm:mt-3 md:mt-3 lg:mt-2 mt-2 text-3xl mb-4 sm:mb-4 md:mb-4 lg:mb-0" title='Click For Dark Mode'></BsSun>
            }

        </>








    return (
        <div>
            <div className="navbar bg-gray-100 h-20 mb-12 shadow-lg dark:bg-gray-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden dark:text-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 dark:bg-gray-900">
                            {menuItems}
                        </ul>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">


                </div>

            </div>
        </div>
    );
};

export default Header;