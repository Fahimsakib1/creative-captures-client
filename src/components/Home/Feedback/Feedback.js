import React from 'react';
import fahim from '../../../images/customer-feedback/Fahim.jpg';
import araf from '../../../images/customer-feedback/Araf.jpg';
import akash from '../../../images/customer-feedback/Akash.jpg';
import shourov from '../../../images/customer-feedback/Shourov.jpg';
import mursalin from '../../../images/customer-feedback/Mursalin.jpg';
import ankit from '../../../images/customer-feedback/Ankit.jpg';

const Feedback = () => {
    return (
        <div>
        <section className=" mt-12 mb-8  text-black">

            <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
                <h2 className='md:text-5xl lg:text-5xl font-semibold text-blue-600 sm:text-4xl text-3xl '>My Happiest Customers</h2>
            </div>

            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">

                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Creative Capture is amazing. I loved the service. They kept their words. I will definitely take services from them next time
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-400 text-gray-900">
                        <img src={fahim} alt="fahim" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-700" />
                        <p className="text-xl font-bold leading-tight">Fahim Faysal</p>
                        <p className="text-sm uppercase font-semibold ">Dinajpur</p>
                    </div>
                </div>

                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg> Their Photography's are next level. In this budget you cant find anyone better than Creative Captures. I am strongly recommending them
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-400 text-gray-900">
                        <img src={araf} alt="araf" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-700" />
                        <p className="text-xl font-bold leading-tight">Arafat Abdullah</p>
                        <p className="text-sm uppercase font-semibold ">Dhaka</p>
                    </div>
                </div>

                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>I wanna give them 10 starts out of five. I have booked the birthday service and from Creative Captures they are just best at their work.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-400 text-gray-900">
                        <img src={akash} alt="akash" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-700" />
                        <p className="text-xl font-bold leading-tight">NA Akash</p>
                        <p className="text-sm uppercase font-semibold ">Jessore</p>
                    </div>
                </div>

                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg> I have a restaurant. For that reason I have purchased the food photography service and I am speechless with the work. I have highly satisfied 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-400 text-gray-900">
                        <img src={shourov} alt="shourov" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-700" />
                        <p className="text-xl font-bold leading-tight">Arash Shourov</p>
                        <p className="text-sm uppercase font-semibold ">Dhaka</p>
                    </div>
                </div>

                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>I have booked them for weeding photography. In a very short period of time they delivered all videos and photos. Really so quick.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-400 text-gray-900">
                        <img src={mursalin} alt="mursalin" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-700" />
                        <p className="text-xl font-bold leading-tight">Mursalin Isalm</p>
                        <p className="text-sm uppercase font-semibold ">Rangpur</p>
                    </div>
                </div>

                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>I have purchased the photo editing service and I must say I am really very much satisfied with the works I have learnt with Creative Captures 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-400 text-gray-900">
                        <img src={ankit} alt="ankit" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-700" />
                        <p className="text-xl font-bold leading-tight">Ankit Roy</p>
                        <p className="text-sm uppercase font-semibold">Sylhet</p>
                    </div>
                </div>

            </div>

        </section>
    </div>
    );
};

export default Feedback;