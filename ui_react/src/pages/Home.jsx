import React from 'react';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Loan App</h2>
        <ul>
          <li>
            <Link to="/contact" className="block py-2 hover:bg-gray-700">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 hover:bg-gray-700">About Us</Link>
          </li>
          <li>
            <Link to="/profile" className="block py-2 hover:bg-gray-700">Profile</Link>
          </li>
          <li>
            <Link to="/logout" className="block py-2 hover:bg-gray-700">Logout</Link>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl bg-white p-8 md:p-16 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Welcome to Our Loan Application
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We provide quick and easy loan application services to help you meet your financial needs.
          </p>
          <Link to="/application">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Apply Now 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
