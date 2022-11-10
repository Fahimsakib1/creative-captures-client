import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export const tokenFunction = (user) => {

    const currentUser = {
        email: user?.email
    }

    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log("Token ", data.token)

            //set the jwt token in the local storage
            localStorage.setItem('creative-token', data.token)

            // Swal.fire(
            //     'Great!',
            //     'Login Successful After getting the JWT Token from JWT Token Function',
            //     'success'
            // )
            toast.success('Successful Sign in by setting the JWT token')
        })

        .catch(error => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops... Failed',
                text: 'Something went wrong!',
                })
        })

}



