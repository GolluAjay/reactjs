import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    
    <div className="max-w-7xl mx-auto px-4 py-8">
  <div className="bg-white shadow-lg rounded-lg px-6 py-8">
    <h1 className="text-4xl font-bold mb-8">
      Give the gift of life - become an organ donor today!
    </h1>
    <p className="text-lg mb-4">
      Organ donation saves lives. Join the millions of people who have already signed up to be organ donors.
    </p>
    <Link to="/donor/signUp" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Sign up to be an organ donor
    </Link>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Why become an organ donor?</h2>
      <p className="text-lg mb-4">
        Organ donation is a selfless act that can save lives. By becoming an organ donor, you can help people who are in need of life-saving organ transplants.
      </p>
      <p className="text-lg mb-4">
        Every day, 20 people die waiting for a transplant. By signing up to be an organ donor, you can help reduce this number and give someone a second chance at life.
      </p>
      <h2 className="text-2xl font-bold mb-4">How does organ donation work?</h2>
      <p className="text-lg mb-4">
        Organ donation typically occurs after a person has died. If the person is a registered organ donor, their organs can be used to save other people's lives. The organs are removed in a surgical procedure and transported to the recipients as quickly as possible.
      </p>
      <p className="text-lg mb-4">
        Organ donation is a highly regulated process that ensures the safety of both the donor and the recipient. The organs are carefully matched to the recipients based on factors such as blood type and medical need.
      </p>
    </div>
  </div>
</div>

  
  );
};

export default HomePage;
