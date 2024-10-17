import React from "react";
import Layout from "../../Components/Layout/Layout";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () =>{
    const [auth] = useAuth()
    return(
        
            <Layout title={"Dashboard-Ecommerce-App"}>
  <div className="min-h-[75vh] bg-gradient-to-r from-blue-100 to-indigo-200 p-6">
   

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1 - User Menu */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          {/* <h2 className="text-xl font-semibold text-blue-600 mb-4">User Menu</h2> */}
          <UserMenu />
        </div>

        {/* Column 2 - User Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-green-900 mb-4">User Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 19.121a1 1 0 001.414 0L12 13.657l5.465 5.464a1 1 0 001.414-1.414L13.414 12l5.465-5.465a1 1 0 00-1.414-1.414L12 10.586 6.535 5.121a1 1 0 00-1.414 1.414L10.586 12l-5.465 5.465a1 1 0 000 1.414z"
                />
              </svg>
              <h1 className="text-lg text-gray-700">Name: {auth?.user?.name}</h1>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7 7m0 0l7-7m-7 7V3"
                />
              </svg>
              <h1 className="text-lg text-gray-700">Phone: {auth?.user?.number}</h1>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0H8a2 2 0 00-2 2v3a2 2 0 002 2h2m4 0h2m-6 4h2a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1a2 2 0 012-2h2z"
                />
              </svg>
              <h1 className="text-lg text-gray-700">Email: {auth?.user?.email}</h1>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2l4 4H8l4-4zM2 12l4-4 6 6-6 6-4-4zm16 0l4 4-6 6-6-6 6-6 4 4z"
                />
              </svg>
              <h1 className="text-lg text-gray-700">Address: {auth?.user?.address}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>


        

    )
}
export default Dashboard