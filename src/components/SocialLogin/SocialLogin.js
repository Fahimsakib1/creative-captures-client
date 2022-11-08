import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const SocialLogin = () => {
    
    const {googleLogin} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log('User After Signed in By Google');
            Swal.fire(
                'Great!',
                'Successfully Signed in By Google',
                'success'
            )
        })

        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops..',
                text: 'Google Sign in Failed',
            })
        })
    }


    
    return (
        <div>
            <p className='text-center'>
                <button onClick={handleGoogleLogin}   className='btn btn-ghost text-2xl'><FaGoogle></FaGoogle></button>

                <button className='btn btn-ghost text-2xl'><FaGithub></FaGithub></button>
            </p>
        </div>
    );
};

export default SocialLogin;