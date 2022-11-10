import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tokenFunction } from '../../JWTTokenFunction/JWTTokenFunction';



const SocialLogin = () => {
    
    const {googleLogin, githubLogin} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log('User After Signed in By Google', user);

            tokenFunction(user);

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

    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            const user = result.user;
            console.log('User After Signed in By Github', user);

            tokenFunction(user);
            
            Swal.fire(
                'Great!',
                'Successfully Signed in By Github',
                'success'
            )
        })

    .catch(error => {
            toast.error('Github Sign in Failed')
        })
    }


    
    return (
        <div>
            <p className='text-center'>
                <button onClick={handleGoogleLogin}   className='btn btn-ghost text-2xl' title='Google Login'><FaGoogle></FaGoogle></button>

                {/* <button onClick={handleGithubLogin} className='btn btn-ghost text-2xl'><FaGithub></FaGithub></button> */}
            </p>
        </div>
    );
};

export default SocialLogin;