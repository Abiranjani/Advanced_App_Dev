import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const nav=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if(formData.email=="admin@gmail.com")
        {
          nav('/Dashboard')
        }
        else{
        nav('/');
        }
    // Perform login logic here, such as validating user credentials

    // If login is successful, redirect to the home page
    
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded-lg text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
