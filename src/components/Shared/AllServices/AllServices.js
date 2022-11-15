import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../../Home/Services/ServicesCard';

const AllServices = () => {


    const [services, setServices] = useState([]);

    const [serviceLoader, setServiceLoader] = useState(true);

    //sort the services based on price
    const [isAsc, setIsAsc] = useState(true);
    
    
    //search the services by service name er jonno state and ref use kora to get the search input field value;
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    
    
    // useEffect(() => {
    //     fetch(`https://creative-captures-server.vercel.app/services?size=${200}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setServices(data);
    //             setServiceLoader(false)
    //         })
    // }, [])


    useEffect(() => {
        fetch(`https://creative-captures-server.vercel.app/services?size=${200}&service=${isAsc ? 'asc' : 'desc'}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
                setServiceLoader(false)
            })
    }, [isAsc, search])


    
    //code for searching the services with name
    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value);

    }






    return (
        <div>

            {
                serviceLoader && <div className="h-32 w-32 border-4 border-dashed rounded-full animate-spin border-black mx-auto mt-16 dark:border-red-600"></div>
            }

            <div>
                <p className='text-3xl text-blue-600 text-center mt-3 mb-2 font-semibold'>Available Services: {services.length}</p>
            </div>






            <div className='flex justify-around items-center mb-4 lg:flex-row md:flex-row sm:flex-col flex-col'>

                {/* Sort the services by Ascending or descending order with input select box*/}
                <div className='flex justify-center items-center lg:flex-row md:flex-row sm:flex-col flex-col'>
                    <div className="mr-3 bg-purple-800 py-3 rounded-md  text-white hidden lg:block">
                        <label className="mr-3 bg-purple-800 py-3 rounded-md px-3 text-white">
                        <span className='text-md'>Filter By Price</span>
                        </label>
                    </div>

                    <div className='lg:w-[400px] md:w-[400px] sm:w-[250px] w-[250px]'>
                        <select onChange={() => setIsAsc(!isAsc)} className="select select-bordered w-full max-w-xs my-8 dark:text-black">
                            <option className='text-lg dark:text-black' value="Low To High">Low To High</option>
                            <option className='text-lg dark:text-black' value='High To Low'>High To Low</option>
                        </select>
                    </div>
                </div>

                {/* Search services by name */}
                <div className='flex justify-center items-center lg:flex-row md:flex-row sm:flex-col flex-col'>
                    <input ref={searchRef} type="text" placeholder="Search By Service Name" className="input input-bordered input-primary w-full max-w-xs dark:text-black" />

                    <button onClick={handleSearch} className="btn btn-primary ml-2 px-6 mt-4 sm:mt-4 md:mt-0">Search</button>
                </div>

            </div>




            {/* Sort the services by Ascending or descending order by button toggle*/}
            {/* <div className='my-8 text-center'>
                    <button onClick={() => setIsAsc(!isAsc)} className='btn btn-primary btn-outline mt-4 px-8'>{isAsc ? 'Filter By High to Low' : 'Filter By Low to High'}</button>
                </div> */}






            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8 px-12 md:px-0 lg:px-12 '>
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