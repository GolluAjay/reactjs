import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Table = () => {
  return (
    <>
    <Link to="/hospital/dashboard"><button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
      <ChevronLeftIcon className="w-8 h-8" />
      <span className='text-2xl'>Back</span>
    </button></Link>
    <div className="relative m-4 overflow-x-auto shadow-md sm:rounded-lg max-h-[610px]">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Donor ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    EHR
                </th>
                <th scope="col" className="px-6 py-3">
                    Authorize Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    donor id
                </th>
                <td className="px-6 py-4">
                    donor@gmail.com
                </td>
                
                <td className="px-6 py-4">
                <div className="">
                    <a href="/" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" >Download File</a>
                </div>
                </td>
                <td className="px-6 py-4">
                    <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Authorize</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    donor id
                </th>
                <td className="px-6 py-4">
                    donor@gmail.com
                </td>
                
                <td className="px-6 py-4">
                <div className="">
                    <a href="/" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" >Download File</a>
                </div>
                </td>
                <td className="px-6 py-4">
                    <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Authorize</a>
                </td>
            </tr>
            
            
            
        </tbody>
    </table>
</div>
</>

  )
}

export default Table;