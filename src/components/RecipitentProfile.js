import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';



const RecipientProfile = () => {
    // const signIn = useSelector((state)=>state.signIn);
    const state = useSelector((state)=>state.recipientProfile.data);
    
  return (
    <>
      <Link to="/recipient/dashboard"><button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
      <ChevronLeftIcon className="w-8 h-8" />
      <span className='text-2xl'>Back</span>
    </button></Link>
    <div className="bg-gradient-to-r m-15">
    <div className="bg-white bg-opacity-70 m-auto max-w-2xl shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
        Recipient Profile
    </h3>
    <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Details and information about the recipient.
    </p>
</div>
<div className="border-t border-gray-200 bg-opacity-70">
    <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 bg-opacity-70 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                Email
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {state.email}
            </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 bg-opacity-70 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                Address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {state.addr}
            </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 bg-opacity-70 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                Contact Number
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {state.contactNumber}
            </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 bg-opacity-70 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                Registered Hospital
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {state.hospital}
            </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 bg-opacity-70 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                Organ Needed
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {state.organ}
            </dd>
        </div>
        {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 bg-opacity-70 sm:gap-4 sm:px-6"> */}
    {/* <dt className="text-sm font-medium text-gray-500">
        Organ List
    </dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-wrap gap-2">
        {organList.map((organ, index) => (
            <span key={index} className="inline-block bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded">
                {organ}
            </span>
        ))}
        {matchOrgans.map((organ, index) => (
            <span key={index} className="inline-block bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded">
                {organ}
            </span>
        ))}
    </dd> */}
{/* </div> */}

        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 bg-opacity-70 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-500">
        EHRDocument
    </dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <a href={`http://localhost:3002/download/${state.ehrTxId}`} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download EHRDocument
        </a>
    </dd>
</div>
    </dl>
</div>

</div>
</div>
</>
  )
}
export default RecipientProfile;