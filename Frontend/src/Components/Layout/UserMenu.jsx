import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth'; 

const UserMenu = () => {
  const [auth] = useAuth();

  return (
    <div className="flex flex-col space-y-4 items-center">
  <div className="bg-gradient-to-r from-blue-900 to-black shadow-lg rounded-lg p-6 max-w-sm w-full">
    <h2 className="text-2xl font-bold text-gray-200 mb-6 text-center">User Menu</h2>
    <div className="space-y-4">
      <Link
        to="/dashboard/user/profile"
        className="flex items-center justify-center bg-white text-black font-semibold py-3 rounded-lg hover:bg-yellow-800 hover:text-white shadow-lg transform transition duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M8 7a2 2 0 00-2 2v3a2 2 0 002 2h2m4 0h2m-6 4h2a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1a2 2 0 012-2h2z"
          />
        </svg>
        Update Profile
      </Link>
      <Link
        to={`/dashboard/user/orders/${auth.user._id}`}
        // ${auth.user._id}`
        className="flex items-center justify-center bg-white text-black font-semibold py-3 rounded-lg hover:bg-yellow-800 hover:text-white shadow-lg transform transition duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7h18M9 15h6m-9 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Orders
      </Link>
    </div>
  </div>
</div>

  );
};

export default UserMenu;
