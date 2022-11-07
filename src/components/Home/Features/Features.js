import React from 'react';
import logo from '../../../images/Logo.PNG';
import logo1 from '../../../images/Collage.webp';

const Features = () => {
    return (
        <div>
            
            <div className='text-center mt-16'>
                <h2 className='text-5xl font-semibold text-blue-600 '>Quality That Matters</h2>
                <div className='w-1/2 mx-auto mt-3'>
                    <p className='text-lg'>Photography allows you to capture memories, stories, and different perspectives. Photography can serve many purposes and have many facets. Photography can tell a story, it can capture a moment in time, it can document, and it can be art.</p>
                </div>
            </div>
            
            <div className='mt-8'>
                <section className="bg-gray-800 text-gray-100 rounded-lg">
                    <div className="container max-w-xl p-6 pt-6 pb-8 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                        <div className="grid lg:gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h3 className="text-2xl font-bold tracking-wider sm:text-3xl text-gray-50">Creative Captures</h3>
                                <p className="mt-2 text-lg text-gray-400">You are most welcome on my website. I provide the best Photography service experience to my customers. Some of my service qualities are added here</p>
                                <div className="mt-8 space-y-12">

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-50">Best Quality Photography</h4>
                                            <p className="mt-2 text-gray-400">I am a professional photographer. I have been working in this field for last 10 years. Besides I have knowledge in many sectors in this domain. You will surely get the best service from me.</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-50">Delivery On Time</h4>
                                            <p className="mt-2 text-gray-400">I always maintain time in all aspect of my life. So you are free of tension for the delivery. I will assure you of timely delivery of any services you are asking for</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-50">Minimal Cost Among Others</h4>
                                            <p className="mt-2 text-gray-400">I charger the lesser amount than all other photographers in the market. I believe in quality not in quantity. Once you tried out my service, you gonna surely avail it for the next time also</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div aria-hidden="true" className="mt-10 lg:mt-0 lg:ml-8">
                                <img className='rounded-xl' src={logo1} alt="logo"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Features;