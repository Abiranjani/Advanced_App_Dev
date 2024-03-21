import React from 'react';

const Dashboard = () => {
  const users = [
    { username: 'abi', age: 30, gender: 'Female', loanAppliedDate: '2024-03-15', loanAmount: 5000, loanType: 'crop' },
    { username: 'fredo', age: 25, gender: 'Female', loanAppliedDate: '2024-03-14', loanAmount: 8000, loanType: 'agri land' },
    { username: 'dharun', age: 35, gender: 'Male', loanAppliedDate: '2024-03-13', loanAmount: 10000, loanType: 'irrigation' },
    { username: 'user4', age: 28, gender: 'Female', loanAppliedDate: '2024-03-12', loanAmount: 6000, loanType: 'crop' },
    { username: 'abi', age: 30, gender: 'Female', loanAppliedDate: '2024-03-15', loanAmount: 5000, loanType: 'crop' },
    { username: 'fredo', age: 25, gender: 'Female', loanAppliedDate: '2024-03-14', loanAmount: 8000, loanType: 'agri land' },
    { username: 'dharun', age: 35, gender: 'Male', loanAppliedDate: '2024-03-13', loanAmount: 10000, loanType: 'irrigation' },
    { username: 'user4', age: 28, gender: 'Female', loanAppliedDate: '2024-03-12', loanAmount: 6000, loanType: 'crop' },
    { username: 'user5', age: 32, gender: 'Male', loanAppliedDate: '2024-03-11', loanAmount: 7000, loanType: 'livestock' },
    { username: 'user5', age: 32, gender: 'Male', loanAppliedDate: '2024-03-11', loanAmount: 7000, loanType: 'livestock' }
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Loan Applied Date</th>
              <th className="px-4 py-2">Loan Amount</th>
              <th className="px-4 py-2">Loan Type</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.age}</td>
                <td className="border px-4 py-2">{user.gender}</td>
                <td className="border px-4 py-2">{user.loanAppliedDate}</td>
                <td className="border px-4 py-2">{user.loanAmount}</td>
                <td className="border px-4 py-2">{user.loanType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;