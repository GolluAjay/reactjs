import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import DonorPage from "./components/DonorPage";
import HospitalPage from "./components/HospitalPage";
import RecipientPage from "./components/RecipientPage";
import Profile from "./components/Profile";
import DonorEditForm from "./components/DonorEditForm";
import Table from "./components/Table";
import RecipientProfile from "./components/RecipitentProfile";
import RecipientEditForm from "./components/RecipientEditForm";
import RecipientTable from "./components/RecipientTable";

function App() {

  
  return (
    <BrowserRouter>
    <div className="bg-gray-500 h-screen" style={{ backgroundImage: "url('https://sahyadrihospital.com/wp-content/uploads/2021/12/organ-donation-and-transplantation.jpg')",backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover" }}>
    <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/donor/signUp" element={<SignUp user="donor" />}/>
        <Route exact path="/donor/signIn" element={<SignIn user="donor" />}/>
        <Route exact path="/hospital/signUp" element={<SignUp user="hospital" />}/>
        <Route exact path="/hospital/signIn" element={<SignIn user="hospital" />}/>
        <Route exact path="/recipient/signUp" element={<SignUp user="recipient" />}/>
        <Route exact path="/recipient/signIn" element={<SignIn user="recipient" />}/>
        <Route exact path="/donor/dashboard" element={<DonorPage />}/>
        <Route exact path="/hospital/dashboard" element={<HospitalPage />}/>
        <Route exact path="/recipient/dashboard" element={<RecipientPage />}/>
        <Route exact path="/donor/profile" element={<Profile  user="donor"/>}/>
        <Route exact path="/donor/profile/edit" element={<DonorEditForm/>}/>
        <Route exact path="/hospital/donors" element={<Table/>}/>
        <Route exact path="/hospital/recipients" element={<RecipientTable/>}/>
        <Route exact path="/recipient/profile" element={<RecipientProfile  user="recipient"/>}/>
        <Route exact path="/recipient/profile/edit" element={<RecipientEditForm/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
