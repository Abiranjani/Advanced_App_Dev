import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <Link to="/contact" className="block hover:text-blue-500">Contact</Link>
          </li>
          <li className="mb-2">
            <Link to="/logout" className="block hover:text-blue-500">Logout</Link>
          </li>
          <li>
            <Link to="/application" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Apply Loan</Link>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl bg-white p-8 md:p-16 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Welcome to Our Agri Loan Application
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
