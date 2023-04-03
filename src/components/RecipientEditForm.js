import React, { useState } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../redux/slice/uploadFile';
import {editRecipientDetails} from '../redux/slice/editRecipientDetails';

const RecipientEditForm = () => {
  const signIn = useSelector((state)=>state.signIn);

  const [number,setNumber] = useState();
  const [file,setFile] = useState();
  const [address,setAddress] = useState();
  const dispatch = useDispatch();


  const navigate = useNavigate();

  const  handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(file[0]);
    
    const selectedOrgan = document.querySelector('input[name="organs"]:checked').value;
    try {
      dispatch(editRecipientDetails({"address":address,"organ":selectedOrgan,"number":number,"user":"recipient","token":signIn.data.token}));
      console.log(file[0]);
      dispatch(uploadFile({"file":file[0],"user":"recipient","token":signIn.data.token}));
      navigate('/recipient/dashboard');
    } catch (error) {
      navigate('/recipient/signIn')
      console.log(error);
    }
    // Do something with the list of organs here
  }

  return (
    <>
   <Link to="/recipient/dashboard"><button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
      <ChevronLeftIcon className="w-8 h-8" />
      <span className='text-2xl'>Back</span>
    </button></Link>
<div className="px-10 mt-28 ">
 
  <div className="bg-white bg-opacity-70 p-10 md:w-3/4 lg:w-1/2 mx-auto">

    <div action="">

     

      <div className="flex items-center mb-5">
        
        <label htmlFor="number" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Contact Number</label>
        <input type="text" id="number" name="number" placeholder="number" 
               className="flex-1 py-2 border-b-2 border-gray-400 focus:border-blue-400
                      text-gray-600 placeholder-gray-400
                      outline-none" onChange={(e)=>setNumber(e.target.value)} />
      </div>

      <div className="flex items-center mb-5">

      <label htmlFor="address" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Address</label>
        <input type="text" id="address" name="address" placeholder="Address" 
               className="flex-1 py-2 border-b-2 border-gray-400 focus:border-blue-400
                      text-gray-600 placeholder-gray-400
                      outline-none" onChange={(e)=>setAddress(e.target.value)}/>
      </div>

      <div className="flex items-center mb-5">
  <label htmlFor="organs" className="inline-block w-20 mr-6 text-right 
                                   font-bold text-gray-600">Organs</label>
  <div className="flex-1 py-2 text-gray-600 placeholder-gray-400 outline-none">
    <label htmlFor="heart" className="inline-flex items-center mr-6">
      <input type="radio" id="heart" name="organs" value="heart" />
      <span className="ml-2">Heart</span>
    </label>
    <label htmlFor="liver" className="inline-flex items-center mr-6">
      <input type="radio" id="liver" name="organs" value="liver" />
      <span className="ml-2">Liver</span>
    </label>
    <label htmlFor="kidneys" className="inline-flex items-center mr-6">
      <input type="radio" id="kidneys" name="organs" value="kidneys" />
      <span className="ml-2">Kidneys</span>
    </label>
    <label htmlFor="lungs" className="inline-flex items-center mr-6">
      <input type="radio" id="lungs" name="organs" value="lungs" />
      <span className="ml-2">Lungs</span>
    </label>
    <label htmlFor="pancreas" className="inline-flex items-center mr-6">
      <input type="radio" id="pancreas" name="organs" value="pancreas" />
      <span className="ml-2">Pancreas</span>
    </label>
    <label htmlFor="intestines" className="inline-flex items-center">
      <input type="radio" id="intestines" name="organs" value="intestines" />
      <span className="ml-2">Intestines</span>
    </label>
  </div>
</div>


<div className="flex items-center mb-5">
  <label htmlFor="ehr-document" className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600">
    EHR Document
  </label>
  
  <input type="file" id="ehr-document" name="ehr-document" 
         className="flex-1 py-2 border-b-2 border-gray-400 focus:border-blue-400
                    text-gray-600 placeholder-gray-400
                    outline-none" onChange={(e)=>setFile(e.target.files)}/>
</div>
      <div className="text-right">
        <button className="py-3 px-8 bg-blue-600 text-white font-bold" onClick={handleSubmit}>Submit</button> 
      </div>
    </div>
  </div>
</div></>
  )
}

export default RecipientEditForm;