import React from 'react';

const ApplyLoanPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Apply for Loan</h1>
        <input type="text" placeholder="Applicant Name" className="w-full border border-gray-300 p-2 rounded-lg mb-2" />
        <input type="text" placeholder="Address" className="w-full border border-gray-300 p-2 rounded-lg mb-2" />
        <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 p-2 rounded-lg mb-2" />
        <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded-lg mb-2" />
        <input type="number" placeholder="Loan ID" className="w-full border border-gray-300 p-2 rounded-lg mb-2" />
        <input type="number" placeholder="Applicant Aadhar" className="w-full border border-gray-300 p-2 rounded-lg mb-2" />
        <input type="number" placeholder="PAN Number" className="w-full border border-gray-300 p-2 rounded-lg mb-2" />
        <input type="number" placeholder="Loan Amount" className="w-full border border-gray-300 p-2 rounded-lg mb-4" />
        <button className="w-full rounded-3xl bg-blue-500 text-white py-2">Submit Application</button>
      </div>
    </div>
  );
};

export default ApplyLoanPage;