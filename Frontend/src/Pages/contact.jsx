import React from 'react'
import Layout from '../Components/Layout/Layout'
const Contact =()=>{
    return(
        <Layout title={'Contact Us'}>
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 mr-4">
    {/* Title */}
    <h1 className="text-4xl font-bold text-center mb-4">
      WE’D LOVE TO HEAR FROM YOU
    </h1>
    
    {/* Subheading */}
    <h2 className="text-xl text-gray-700 text-center mb-8">
      How can we help you today?
    </h2>

    {/* Description */}
    <p className="text-center text-gray-600 max-w-2xl mb-10">
      You can chat with our Virtual assistant 24/7 for answers to frequently asked questions. 
      You’ll be put through to a live agent if you need more help, during below opening hours.
    </p>
    
    {/* First button section */}
    <div className="bg-gray-100 flex items-center justify-center mb-8">
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7h2l.867 2.6a2 2 0 001.906 1.4h7.454a2 2 0 001.906-1.4L19 7h2M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l1.5-4.5A1 1 0 015.5 2h13a1 1 0 011 1L21 7M12 11v6m-4-3h8"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="font-semibold text-lg mb-2">
          I WANT TO KNOW WHERE MY ORDER IS
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-4">
          Enter the order number found in the order confirmation email
        </p>

        {/* Form */}
        <div className="mb-4">
          <label
            htmlFor="orderNumber"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Order no <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            placeholder="e.g. 31234567890"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-black text-white font-semibold py-2 rounded-lg shadow hover:bg-gray-800">
          Track my order
        </button>
      </div>
    </div>

    {/* Second button section */}
    <div className="bg-gray-100 flex items-center justify-center mb-8">
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7h2l.867 2.6a2 2 0 001.906 1.4h7.454a2 2 0 001.906-1.4L19 7h2M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l1.5-4.5A1 1 0 015.5 2h13a1 1 0 011 1L21 7M12 11v6m-4-3h8"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="font-semibold text-lg mb-2">
          I want to return something
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-4">
          Register returns easily online. All you need is the order number found in the order confirmation email, and the email address used when placing your order.
        </p>

        {/* Submit Button */}
        <button className="w-full bg-black text-white font-semibold py-2 rounded-lg shadow hover:bg-gray-800">
          Register a return
        </button>
      </div>
    </div>

    {/* Contact Details */}
    <div className="bg-gray-100 text-center shadow-md rounded-lg p-4 w-full max-w-3xl mb-4">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Call us</h3>
      <p className="text-gray-600 mb-2">1800-889-8000</p>
      <p className="text-gray-500 italic mb-4">Free of charge</p>

      <h4 className="text-xl font-semibold text-gray-800 mb-2">Opening Hours</h4>
      <p className="text-gray-600 mb-2">
        <strong>Phone:</strong> Monday – Sunday: 8.00 – 22.00
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Chat:</strong> Monday – Sunday: 8.00 – 22.00
      </p>

      <h4 className="text-xl font-semibold text-gray-800 mb-2">Email</h4>
      <p className="text-gray-600 mb-4">customerservice.in@hm.com</p>

      <h4 className="text-xl font-semibold text-gray-800 mb-2">LET'S CONNECT ON SOCIAL MEDIA</h4>
      <p className="text-gray-600 mb-2">
        <strong>Facebook</strong> | <strong>Instagram</strong>
      </p>
    </div>

    {/* Privacy Notice */}
    <p className="text-center text-gray-500 mt-4 max-w-2xl">
      When you contact Customer Service your personal data will be processed in accordance with our 
      <a href="#" className="text-blue-500"> Privacy Notice</a>.
    </p>

    {/* Environmental Message */}
    <p className="text-center text-gray-500 mt-2 max-w-2xl">
      All product returns come at an environmental cost and each returned package leaves a significant 
      trail of emissions. H&M encourages you to be a contributor towards climate positive fashion. 
      Kindly refer to our product details and size guide to avoid inconvenience of returns.
    </p>
  </div>
</Layout>
    
    )
}
export default Contact