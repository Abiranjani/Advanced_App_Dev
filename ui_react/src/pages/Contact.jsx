import React from 'react';

const ContactPage = () => (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Loan Application Contact Form</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default ContactPage;