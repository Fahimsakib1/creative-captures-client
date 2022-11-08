import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <p className='text-center'>
                <button className='btn btn-ghost text-2xl'><FaGoogle></FaGoogle></button>
                <button className='btn btn-ghost text-2xl'><FaGithub></FaGithub></button>
            </p>
        </div>
    );
};

export default SocialLogin;