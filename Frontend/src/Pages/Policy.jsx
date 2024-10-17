import React from 'react'
import Layout from '../Components/Layout/Layout'
const Policy =()=>{
    return(
        <Layout title={' Privacy-Policy'}>
             <div className="flex flex-col md:flex-row items-start p-8 bg-indigo-50">
      {/* Left side - Image */}
      <div className="md:w-1/3 w-full mb-8 md:mb-0  ">
        <img
          src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Privacy Commitment"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right side - Privacy Policy Content */}
      <div className="md:w-2/3 w-full md:pl-8">
        {/* Main Heading */}
        <h1 className="text-5xl  font-bold font-serif text-emerald-800 mb-6">Privacy & Policy</h1>

        {/* PRIVACY COMMITMENT */}
        <h2 className="text-xl font-semibold text-yellow-800 mb-4 font-mono">PRIVACY COMMITMENT</h2>
        <p className="text-gray-600 mb-6">
          We are committed to safeguarding your personal information and ensuring its
          confidentiality, integrity, and security. Our privacy practices are designed
          to protect your personal data while providing the services you need.
        </p>

        {/* PERSONAL DATA HANDLING IN BRIEF */}
        <h2 className="text-2xl font-semibold text-emerald-800 mb-4 font-serif">PERSONAL DATA HANDLING IN BRIEF</h2>

        {/* Subheading 1 */}
        <h3 className="text-xl font-semibold text-yellow-700 mb-2 font-mono ">1. Why do we process your personal data?</h3>
        <p className="text-gray-600 mb-4">
          We process your personal data to provide and improve our services, comply with legal
          obligations, and ensure a personalized experience. This may include analyzing usage patterns
          to enhance our offerings and marketing efforts.
        </p>

        {/* Subheading 2 */}
        <h3 className="text-xl font-medium text-yellow-700 mb-2 font-semibold font-mono">2. What type of personal data do we process?</h3>
        <p className="text-gray-600 mb-4">
          The types of personal data we collect include your name, email address, contact details,
          and information regarding your usage of our services. This may also involve collecting data
          about your preferences and interactions with our platforms.
        </p>

        {/* Subheading 3 */}
        <h3 className="text-xl  text-yellow-700 mb-2 font-semibold font-mono">3. Where do we process your data?</h3>
        <p className="text-gray-600 mb-4">
          Your data is primarily processed within the country in which you reside. However, some of
          our services may require the processing of data internationally. We ensure that all data transfers
          comply with relevant legal frameworks for data protection.
        </p>

        {/* Subheading 4 */}
        <h3 className="text-xl font-medium text-yellow-700 mb-2 font-semibold font-mono">4. Who do we share your data with?</h3>
        <p className="text-gray-600 mb-4">
          We may share your personal data with trusted third-party service providers to help us deliver
          our services. These parties are contractually bound to process your data securely and in
          accordance with applicable laws.
        </p>

        {/* Subheading 5 */}
        <h3 className="text-xl font-medium text-yellow-700 mb-2 font-semibold font-mono">5. What are your rights?</h3>
        <p className="text-gray-600 mb-4">
          You have the right to access, correct, or delete your personal data at any time. Additionally, you
          can object to the processing of your data, withdraw your consent where applicable, and request
          data portability.
        </p>
      </div>
    </div>

        </Layout>
    )
}
export default Policy