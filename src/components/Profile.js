import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <Link to="/donor/dashboard"><button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
      <ChevronLeftIcon className="w-8 h-8" />
      <span className='text-2xl'>Back</span>
    </button></Link>
    <div className="bg-gradient-to-r m-28">
    <div className="bg-white bg-opacity-70 m-auto max-w-2xl shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
            Donor Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Details and informations about user.
        </p>
    </div>
    <div className="border-t border-gray-200 bg-opacity-70">
        <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 bg-opacity-70 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Mickael Poulaz
                </dd>
            </div>
        </dl>
    </div>
</div>
</div></>
  )
}
export default Profile;