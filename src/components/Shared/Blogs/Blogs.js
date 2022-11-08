import React from 'react';
import AnswerOneTable from './AnswerOneTable';
import AnswerThreeTable from './AnswerThreeTable';

const Blogs = () => {
    return (
        <div className='w-3/4 mx-auto '>
            <section className="bg-gray-800 text-gray-100 rounded-xl">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center">Some Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-400 text-center">Although I am photographer but currently I am learning React with My most favorite Programming Hero Team. Some of the questions and answers are given below</p>

                    <div className="space-y-4">

                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-lg text-green-600">Question 1: What are the Differences between SQL and NoSQL?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                <span className='text-blue-600'>SQL (Structured Query Language)</span> is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.
                            </p>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                <span className='text-blue-600'>NoSQL databases are non-tabular databases</span> and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph. They provide flexible schemas and scale easily with large amounts of data and high user loads. Differences between SQL and NoSQL are given below
                            </p>
                            <AnswerOneTable></AnswerOneTable>
                        </details>


                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-green-600 text-lg">Question 2: What is JWT, and how does it work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs). They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.
                            </p>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                            </p>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                            </p>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                Once decoded, you will get two JSON strings: The header and the payload, The signature.
                                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                            </p>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                            </p>

                        </details>


                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-green-600 text-lg">Question 3: What is the difference between javascript and NodeJS?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                <span className='text-blue-600'>Javascript is a simple object-oriented programming language </span> for building interactive HTML pages. JavaScript is also commonly used in the development of games and mobile applications. The program can only be executed and run in an internet browser because it is interpreted as scripting. To run and execute the code outside the browser, we can utilize Node.js.
                            </p>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                <span className='text-blue-600'>For executing JavaScript on the server, Node.js is a bridge, open-source Js runtime environment.</span> It may run on various operating systems, including Windows, Linux, and Mac OS. It provides a cross-platform runtime environment for developing highly scalable server-side JavaScript applications with event-driven, non-blocking (asynchronous) I/O.
                            </p>
                            <AnswerThreeTable></AnswerThreeTable>
                        </details>


                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-green-600 text-lg">Question 4: How does NodeJS handle multiple requests at the same time?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                <span className='text-blue-600'>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests.</span> Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue. NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                            </p>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                                So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue.The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                            </p>
                            
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">

                                If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.
                            </p>
                        </details>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;