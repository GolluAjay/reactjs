import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../redux/slice/signIn'

const SignIn = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.signIn);
    const {user} = props;

    const signInHandler = () => {
        if(email !== "" && password !== ""){
            dispatch(signIn({"email":email,"password":password, "user":user}));
        }
        console.log(state);
    }

    useEffect(()=>{
        if(state.data){
            navigate(`/${user}/dashboard`);
        }
    },[state,navigate,user,dispatch])

  return (
      <div className="bg-gradient-to-r ">
    <div className="flex m-28 text-gray-900">
        <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-70 bg-clip-padding">
            <div className="space-y-2">
                <div>
                    <h1 className="text-2xl font-medium text-center md:text-4xl font-roboto">{user.charAt(0).toUpperCase() + user.slice(1)} Welcome Back!</h1>
                </div>
                <div>
                    <div className="space-x-1 text-sm text-center md:text-base font-nunito">
                        <span>
                            New to Organ Chain?
                        </span>
                        <Link className="font-semibold text-blue-500" to={`/${user}/signUp`}>Sign Up</Link>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="text-base font-nunito">
                    <div className="space-y-4">
                        <div className="relative flex items-center">
                            
                            <input
                                className="w-full p-2  text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div className="relative flex items-center">
                            
                            <input
                                className="w-full p-2  text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        
                        <div>
                            <button
                                className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" onClick={signInHandler}>Sign
                                In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignIn;