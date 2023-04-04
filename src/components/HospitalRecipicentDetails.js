import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HospitalRecipientDetails = () => {
    const recipients = useSelector((state)=>state.hospitalRecipient.data);
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
                Recipient ID
            </th>
            <th scope="col" className="px-6 py-3">
                Email
            </th>
            <th scope="col" className="px-6 py-3">
                Contact Number
            </th>
            <th scope="col" className="px-6 py-3">
                Organ Needed
            </th>
            <th scope="col" className="px-6 py-3">
                EHR status
            </th>
        </tr>
    </thead>
    <tbody>
        {recipients.list.map((recipient)=><tr key={recipient.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {recipient.id}
            </th>
            <td className="px-6 py-4">
                {recipient.email}
            </td>
            <td className="px-6 py-4">
                <div className="">
                    {recipient.contactNumber}
                </div>
            </td>
            <td className="px-6 py-4">
            <div className="">
                    {recipient.organ}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="">
                    {recipient.ehrUploaded ? "Uploaded":"Not Uploaded"}
                </div>
            </td>
            
        </tr>)}
    </tbody>
</table>

</div>
</>

  )
}

export default HospitalRecipientDetails;