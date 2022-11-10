import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ServicesCard from './ServicesCard';

const Services = () => {

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://creative-captures-server.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    useTitle('All Services');

    //const {loading, setLoading} = useContext(AuthContext);
    
    //const [loading, setLoading] = useState(true);

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://creative-captures-server.vercel.app/services?size=${3}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])




    return (
        <div>
            <div className='text-center mt-24 mb-8'>
                <h2 className='md:text-5xl lg:text-5xl font-semibold text-blue-600 sm:text-4xl text-3xl '>My Services</h2>
                <div className='sm:w-full md:w-3/4 lg:w-1/2 mx-auto mt-3'>
                    <p className='text-lg'>Although I provide many services regarding photography. Some of the services of mine are add here.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8 px-12'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>

            <div className='mx-auto mb-16 w-3/4 text-center'>
                <Link to='/services'><button className="btn btn-outline btn-primary ">See All Services</button></Link>
            </div>

        </div>
    );
};

export default Services;