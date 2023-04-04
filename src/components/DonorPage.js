import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {donorProfile} from '../redux/slice/donorProfile'
// import NavBar from './NavBar';

 const DonorPage=() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.signIn);
    useEffect(()=>{
        if(state.data == null){
            navigate('/donor/signIn');
        }
        else if(state.data.user !== "donor"){
            navigate('/')
        }
    },[navigate,state])
    useEffect(()=>{
        dispatch(donorProfile({"user":"donor","token":state.data.token}));
    },[dispatch,state])
  return (
    <div className="bg-gradient-to-r ">
    <div className="grid grid-cols-1 m-24 text-gray-900">
       
        <div className="m-auto">
            <Link to='/donor/profile '><button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View Profile</button></Link>
        </div>

        <div className="m-auto">
            <Link to='/donor/profile/edit'><button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >Send Organ Donating Details</button></Link>
        </div>

        <div className="m-auto">
        <Link to='/donor/status'><button className="w-11/12 p-8 m-10 sm:w-96 text-sm bg-clip-padding font-semibold text-center text-white transition duration-100 rounded-lg md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >View Organ Donated Details Status</button></Link>
        </div>
                           
        </div>
    </div>)
}
export default DonorPage;