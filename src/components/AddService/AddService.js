import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const AddService = () => {

    const { user } = useContext(AuthContext);


    const handleAddService = (event) => {
        event.preventDefault();

        const serviceId = event.target.serviceId.value;
        const serviceName = event.target.serviceName.value;
        const servicePhoto = event.target.photoURL.value;
        const serviceCharge = event.target.serviceCharge.value + ' Taka';

        const serviceDuration = event.target.serviceDuration.value + ' Hours';
        const serviceRating = event.target.serviceRating.value;

        const email = user?.email || 'Unregistered User';
        const serviceDescription = event.target.serviceDescription.value;

        console.log(serviceId, serviceName, servicePhoto, serviceCharge, serviceDuration, serviceRating, email, serviceDescription);

        if(serviceId <=7 ){
            return  Swal.fire({
                icon: 'error',
                title: 'Some Services are added already..',
                text: 'Service ID cant be from 1 to 7..'
            })
        }

        const serviceInfo = {
            service_id: serviceId,
            service_name: serviceName,
            img: servicePhoto,
            price: serviceCharge,
            duration: serviceDuration,
            ratting: serviceRating,
            email: email,
            description: serviceDescription
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })

            .then(res => res.json())
            .then(data => {
                
                if(data.acknowledged){
                    console.log(data);
                    Swal.fire(
                        'Good job!',
                        'Service Added Successfully',
                        'success'
                    )
                    event.target.reset();
                }

                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops... Order Not Placed',
                        text: 'Something went wrong!'
                    })
                }
            })
            .catch(error => console.error(error))
    }


    return (
        <div className=''>
            <div className='bg-gray-800 w-3/4 mx-auto rounded-lg '>
                <form onSubmit={handleAddService} className='pb-3'>
                    <div className=' w-3/4 mx-auto'>
                        <h2 className='text-center font-bold text-blue-700 text-2xl mb-6 pt-6'>Add Your Service</h2>

                        <div>
                            <input name="email" type="text" defaultValue={user?.email} readOnly placeholder="Your Email Address" className="input input-bordered w-full mx-auto text-gray-400 font-semibold mb-6" />
                        </div>
                        
                        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mb-6'>

                            <input name="serviceId" type="text" placeholder="Service ID" className="input input-bordered w-full mx-auto" required/>

                            <input name="serviceName" type="text" placeholder="Service Name" className="input input-bordered w-full mx-auto" required/>

                            <input name="photoURL" type="text" placeholder="Service Photo URL" className="input input-bordered w-full mx-auto" required />

                            <input name="serviceCharge" type="text" placeholder="Service Charge in Taka" className="input input-bordered w-full mx-auto" required/>

                            <input name="serviceDuration" type="text" placeholder="Service Duration in Hours" className="input input-bordered w-full mx-auto" required />

                            <input name="serviceRating" type="text" placeholder="Service Rating" className="input input-bordered w-full mx-auto" />

                        </div>

                        <div>
                            <textarea
                                name="serviceDescription"
                                className="textarea textarea-bordered w-full pb-6" placeholder="Service Description" required></textarea>
                        </div>
                    </div>

                    <div className=''>
                        <button type="submit" className="block p-3 text-center rounded-lg text-gray-100  mb-6 mt-10 w-1/2 mx-auto btn btn-primary">Add Service</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddService;