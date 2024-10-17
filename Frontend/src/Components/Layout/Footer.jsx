import React from  'react'
import { Link } from 'react-router-dom'; 

const Footer =()=>{
return(
    <div>
        <footer className="bg-gradient-to-r from-gray-800 to-black  text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
        <div className="flex justify-center space-x-8">
          {/* About Link */}
          <Link
            to="/about"
            className="hover:text-white text-sm font-medium"
          >
            About Us
          </Link>
       
          {/* Privacy Link */}
          <Link
            to="/policy"
            className="hover:text-white text-sm font-medium"
          >
            Privacy Policy
          </Link>
          {/* Contact Link */}
          <Link
            to="/contact"
            className="hover:text-white text-sm font-medium"
          >
            Contact Us
          </Link>
          
        </div>
       
        </div>
        {/* Copyright Section */}
        <div className="mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
        </div>
        </footer>

    </div>
)
}
export default Footer