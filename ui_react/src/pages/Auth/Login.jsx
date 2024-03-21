import React from 'react';

const AgriLoanPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://source.unsplash.com/featured/?agriculture")'}}>
    
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
      </main>
    
    </div>
  );
};

export default AgriLoanPage;