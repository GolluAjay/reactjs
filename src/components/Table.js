import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { donorAuthorize } from '../redux/slice/hospitalDonorAuthorize';
import { donorUnauthorize } from '../redux/slice/hospitalDonorUnauthorize';
import {hospitalDonor} from '../redux/slice/hospitalDonor';

const Table = () => {
    const donors = useSelector((state)=>state.hospitalDonor.data);
    const signIn = useSelector((state)=>state.signIn.data);
    const dispatch = useDispatch();

   


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
                    Contact Number
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
            {donors.list.map((donor)=><tr key={donor.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {donor.id}
                </th>
                <td className="px-6 py-4">
                    {donor.contactNumber}
                </td>
                
                <td className="px-6 py-4">
                <div className="">
                    <a href={`http://localhost:3002/download/${donor.ehrTxId}`} className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" >Download File</a>
                </div>
                </td>
                {
                    donor.authorised ? (<td className="px-6 py-4">
                    <button  className="font-medium text-red-600 dark:text-blue-500 hover:underline" onClick={(e)=>{dispatch(donorUnauthorize({"user":"hospital","id":donor.id,"token":signIn.token})); dispatch(hospitalDonor({"user":"hospital","token":signIn.token}));}}>Unauthorize</button>
                    </td>) :
                    (<td className="px-6 py-4">
                    <button  className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e)=>{dispatch(donorAuthorize({"user":"hospital","id":donor.id,"token":signIn.token})); dispatch(hospitalDonor({"user":"hospital","token":signIn.token}));}}>Authorize</button>
                    </td>)
                }
                
            </tr>)}
            
        </tbody>
    </table>
</div>
</>

  )
}

export default Table;