import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.PNG';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';



const Header = () => {


    const { user, logoutUser } = useContext(AuthContext);

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

            <li className='font-semibold mr-2'> <Link to='/'>Home</Link></li>
            <li className='font-semibold mr-2'> <Link to='/blogs'>Blogs</Link></li>


            {
                user?.uid ?
                    <>
                        <li className='font-semibold mr-2'> <Link to='/myReviews'>My Reviews</Link></li>
                        <li className='font-semibold mr-2'> <Link to='/addService'>Add Service</Link></li>
                        <p className='text-blue-800 font-semibold my-auto'>Welcome, {user.email ? user.email : user.displayName}</p>
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

        </>





    return (
        <div>
            <div className="navbar bg-gray-100 h-20 mb-12 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
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