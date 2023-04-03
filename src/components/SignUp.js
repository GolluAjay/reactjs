import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {resetToInitalState, signUp} from '../redux/slice/signUp'
import { getHospitals } from '../redux/slice/getHospitals';


const SignUp = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.signUp);
    const hospitalNames = useSelector((state)=>state.hospitalNames.data);
  const {user} = props;
  const signUpHandler = () => {
    if(email !== "" && password !== "" && name !== ""){
    switch(user){
        case "hospital":
            dispatch(signUp({"email":email,"password":password,"name":name, "user":user}))
            break;
        case "donor":
            dispatch(signUp({"email":email,"password":password,"hospitalName":name, "user":user}))
            break;
        case "recipient":
            dispatch(signUp({"email":email,"password":password,"hospitalName":name, "user":user}))
            break;
        default:
            break;
    }}

  }

  useEffect(()=>{
    if(state.registered){
        navigate(`/${user}/signIn`);
        dispatch(resetToInitalState())
    }
},[state,navigate,user,dispatch])

useEffect(()=>{
    dispatch(getHospitals({user:"hospital"}));
},[dispatch])

useEffect(()=>{
    setName("Hospital Name");
},[])

 
  return (
    <div className="bg-gradient-to-r">
    <div className="flex mt-28 text-gray-900">
        
        <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-70 bg-clip-padding">
            <div className="space-y-2">
                <div>
                    <h1 className="text-2xl font-medium text-center md:text-4xl font-roboto">Create {user.charAt(0).toUpperCase() + user.slice(1)} Account</h1>
                </div>
                <div>
                    <div className="space-x-1 text-sm text-center md:text-base font-nunito">
                        <span>
                            Already have an account?
                        </span>
                        <Link className="font-semibold text-blue-500" to={`/${user}/signIn`}>Sign In</Link>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="text-base font-nunito">
                    <div className="space-y-4">
                        <div className="relative flex items-center">
                            
                            <input
                                className="w-full p-2  text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="email" name="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div className="relative flex items-center">
                            
                            <input
                                className="w-full p-2  text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="password" name="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <div className="relative flex items-center">
                            
                         { !((user === "donor") || (user==="recipient")) ? (<input
                                className="w-full p-2  text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="text" name="name" placeholder="Hospital Name"  onChange={(e)=>setName(e.target.value)} required/>):
                                (<><select
                                          className="w-full p-2 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none"
                                          name="name" onChange={(e)=>{setName(e.target.value)}}  required>
                                                <option key={"Hospital Name"} value="Hospital Name">Hospital Name</option>
                                          {
                                                hospitalNames !== null ? (hospitalNames.list.map(hospital => (
                                                        <option key={hospital} value={hospital}>{hospital}</option>
                                                     ))) : <></>
                                          }
                                      </select><div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bottom-0">
                                              <svg className="w-4 h-4 text-gray-500 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                  <path fillRule="evenodd"
                                                      d="M5.293 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414L10 5.414V15a1 1 0 1 1-2 0V5.414L6.707 7.121a1 1 0 0 1-1.414-1.414z"
                                                      clipRule="evenodd" />
                                              </svg>
                                          </div></>)}

                        </div>
                        
                             {/* <input
                                className="w-full p-2 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="file"
                                name="file"
                                // onChange={(e) => handleFileUpload(e.target.files)}
                                required
                                        /> */}
                        <div>
                            <button
                                className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" onClick={signUpHandler}>Sign
                                Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignUp;