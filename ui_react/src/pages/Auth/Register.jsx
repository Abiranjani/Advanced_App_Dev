import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register= () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
    } else {
      
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 text-white py-2 px-4 hover:bg-blue-700"
            >
            <Link to="/">Register</Link>
            </button>
        </form>
      </div>
    </div>
  );
};

export default Register;