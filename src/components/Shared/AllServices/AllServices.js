import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../../Home/Services/ServicesCard';

const AllServices = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${200}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])


    return (
        <div>
            <div>
                <p className='text-3xl text-blue-600 text-center mt-3 mb-7 font-semibold'>Available Services: {services.length}</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8 px-12'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>

            <div className='text-center mt-24'>
                <Link to='/'><button className='btn btn-primary px-16'>Back To Home</button></Link>
            </div>

        </div>
    );
};

export default AllServices;