import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.PNG'

const Header = () => {



    const menuItems = <>
        <div className='flex'>
            <div className="avatar">
                <div className="w-12 mr-2 rounded">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <li className='font-bold text-xl uppercase text-blue-700 -ml-2'> <Link to='/'>Creative Captures</Link></li>
        </div>
        <li className='font-semibold'> <Link to='/'>Home</Link></li>
        <li className='font-semibold'> <Link to='/allProducts'>All Products</Link></li>
        <li className='font-semibold'> <Link to='/addProducts'>Add Products</Link></li>
        <li className='font-semibold'> <Link to='/blogs'>Blogs</Link></li>


        {/* {
            user?.email ?
                <>
                    <li className='font-semibold'> <Link to='/registeredUsers'>My Reviews</Link></li>
                    <li className='font-semibold'> <Link to='/registeredUsers'>Add Service</Link></li>

                    <li className='font-bold text-red-600'>
                        <button
                            className='btn-ghost'>Logout</button>
                    </li>
                </>

                :
                <>
                    <li className='font-bold text-blue-800'> <Link to='/login'>Login</Link></li>

                    <li className='font-bold text-purple-800'> <Link to='/signup'>Sign Up</Link></li>
                </>
        } */}



        {/* {
            user?.email && <p className='text-blue-800 font-semibold my-auto'>Welcome, {user.email}</p>
        } */}

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



                    {/* <Link to='/productsByEmail'>
                        <button className="btn btn-primary font-bold ml-3 mr-10" title='Products Filtered With Email'>
                            <FaShoppingCart className='text-2xl'></FaShoppingCart>
                        </button>
                    </Link> */}


                </div>

            </div>
        </div>
    );
};

export default Header;