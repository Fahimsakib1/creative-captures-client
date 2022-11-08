import React from 'react';

const AnswerThreeTable = () => {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">

                        <colgroup>
                            <col className="w-5" />
                            <col className="w-5" />
                        </colgroup>

                        <thead>
                            <tr className="bg-gray-700 text-lg">
                                <th className="p-3 text-center">JavaScript</th>
                                <th className="p-3 text-center">Node.js</th>
                            </tr>
                        </thead>

                        <tbody className="border-b bg-gray-900 border-gray-700">

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>It is an accessible, bridge, parsed, lightweight, reactive, <br></br> and web apps programming language.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>It's a bridge, open-source Js runtime environment <br></br> for executing Js on the server.</p>
                                </td>
                            </tr>

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>It's a programming language, after all. Any browser <br></br> with a competent browser engine will operate.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>It's a JavaScript translator and environment that <br></br> includes some valuable libraries for JavaScript programming.</span>
                                </td>
                            </tr>

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>It's most commonly used on client-side servers.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>	It's mainly popular on the server-side.</span>
                                </td>
                            </tr>

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>It's made for creating network-centric apps.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Made for real-time data-intensive apps that run on multiple platforms.</span>
                                </td>
                            </tr>

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>It's a new release of the ECMA script that <br></br> works on the C++-based V8 engine.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>C++, C, and JavaScript are used.</span>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    );
};

export default AnswerThreeTable;