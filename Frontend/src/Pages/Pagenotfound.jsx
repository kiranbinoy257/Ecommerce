import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
const Pagenotfound =()=>{
    return(
        <Layout title={'Go Back-Page Not Found'}>
           <div>
        <footer className="bg-light-800 text-gray-00 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
        <div className='pnf'>
            <h1 className='pnf-title'>404</h1>
            <h2 className='pnf-heading'>
                Oops ! Page Not Found
            </h2>
            <Link to="/" className='pnf-btn'>
            Go Back
            </Link>
        </div>
        </div>
        
        </div>
        </footer>

    </div>

        </Layout>
    )
}
export default Pagenotfound