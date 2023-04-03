import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {hospitalDonor} from '../redux/slice/hospitalDonor';
import { hospitalRecipient } from '../redux/slice/hospitalRecipients';

 const HospitalPage=() => {
    const navigate = useNavigate();
    const state = useSelector((state)=>state.signIn);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(state.data == null){
            navigate('/hospital/signIn');
        }
        else if(state.data.user !== "hospital"){
            navigate('/')
        }
    },[navigate,state])
    
    useEffect(()=>{
        dispatch(hospitalDonor({"user":"hospital","token":state.data.token}));
        dispatch(hospitalRecipient({"user":"hospital","token":state.data.token}));
    },[state,dispatch])
  return (
    <div className="bg-gradient-to-r mx-auto">
    <div className="grid grid-cols-3 gap-10 m-36 text-gray-900">
       
        <div className="m-auto">
            <Link to='/hospital/recipients'><button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View all Patients and Authorize</button></Link>
        </div>

        <div className="m-auto">
            <Link to='/hospital/donors'><button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View all Donors and Authorize</button></Link>
        </div>

        <div className="m-auto">
            <button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View all Organ Donated Details</button>
        </div>

        <div className="m-auto">
            <button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View all Patient Transplation request Details</button>
        </div>

        <div className="m-auto">
            <button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View all Organ Donation Results</button>
        </div>

        <div className="m-auto">
            <button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View Organ Transplation Results</button>
        </div>
                           
        </div>
    </div>
  )
}
export default HospitalPage;