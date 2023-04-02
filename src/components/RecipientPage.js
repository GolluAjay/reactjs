import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


 const RecipientPage=() => {
    const navigate = useNavigate();
    const state = useSelector((state)=>state.signIn);

    useEffect(()=>{
        if(state.data == null){
            navigate('/recipient/signIn');
        }
        else if(state.data.user !== "recipient"){
            navigate('/')
        }
    },[navigate,state])
  return (
    <div className="bg-gradient-to-r ">
    <div className="grid grid-cols-1 m-24 text-gray-900">
       
        <div className="m-auto">
            <button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View Profile</button>
        </div>

        <div className="m-auto">
            <button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >Register for Organ transplantation</button>
        </div>

        <div className="m-auto">
            <button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View all Organ transplantation Details</button>
        </div>
                           
        </div>
    </div>
  )
}
export default RecipientPage;