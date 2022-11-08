import React from 'react';

const AnswerOneTable = () => {
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
                                <th className="p-3 text-center">SQL</th>
                                <th className="p-3 text-center">NoSQL</th>
                            </tr>
                        </thead>

                        <tbody className="border-b bg-gray-900 border-gray-700">

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>Relational Database Management System (RDBMS)</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>Non-relational or distributed database system.</p>
                                </td>
                            </tr>

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>These databases have fixed or static or predefined schema</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>They have dynamic schema</span>
                                </td>
                            </tr>

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>These databases are not suited for hierarchical data storage.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>These databases are best suited for hierarchical data storage.</span>
                                </td>
                            </tr>

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>These databases are best suited for complex queries.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>These databases are not so good for complex queries</span>
                                </td>
                            </tr>

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>Vertically Scalable and follows ACID property </p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Horizontally scalable and follows CAP(consistency, availability, partition tolerance)</span>
                                </td>
                            </tr>

                            <tr className='text-lg'>
                                <td className="px-3 py-2">
                                    <p>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</span>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    );
};

export default AnswerOneTable;


