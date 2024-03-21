import React from 'react';

const LoanDetailsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Loan Details</h1>
        <div className="mb-4">
          <label className="block text-gray-800 font-bold mb-2">Number of Applicants:</label>
          <p>2</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-bold mb-2">Loan Amount:</label>
          <p>$10,000</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-bold mb-2">Loan Type:</label>
          <p>Agricultural Loan</p>
        </div>
      </div>
    </div>
  );
};

export default LoanDetailsPage;