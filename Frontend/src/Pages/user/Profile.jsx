import React,{useState} from 'react'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast';
import UserMenu from '../../Components/Layout/UserMenu';


const Profile =()=>{
    const [auth,setAuth] =useAuth();
    const navigate = useNavigate();
     const [formData,setFormData] =useState({
      name: auth?.user?.name ||'',
      email:auth?.user?.email ||'',
      number:auth?.user?.number ||'',
      address:auth?.user?.address ||''
     })
    
     const handleInputChange =(e) =>{
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value,
        }))
     }
     const handleSubmit=async  (e) =>{
        e.preventDefault()
     
       try {
         const res= await axios.put(`http://localhost:3006/api/v1/auth/profile`,formData);
         if(res.status === 201){
          toast.success(res.data.message)
          navigate('/')
         }else{
            setAuth((prevAuth) => ({
              ...prevAuth,
              user: res?.data?.updatedUser,
            }));
            let ls = localStorage.getItem("auth");
            ls = JSON.parse(ls);
            ls.user = res.data.updatedUser;
            localStorage.setItem('auth', JSON.stringify(ls));
            toast.success("Profile updated successfully");
          }
        
       } catch (error) {
        console.log(error);
        toast.error('Something went wrong')
        
        
       }
        
     }
   return(
    <Layout title={'Admin-Dashboard'}>
         <div className="container mx-auto p-4 min-h-[73vh]">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
         <div className="bg-white  p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          {/* <h2 className="text-xl font-semibold text-blue-600 mb-4">User Menu</h2> */}
          <UserMenu/>
        </div>
         {/* <div className="flex justify-center items-center h-screen bg-gray-100"> */}
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-8">Update Data</h2>
            <form className="space-y-4"onSubmit={handleSubmit} >
            
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                onChange={handleInputChange}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                   value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                   value={formData.number}
                   onChange={handleInputChange}
                />
              </div>


             

              {/* Optional Address Field */}
              <div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your address (optional)"
                 value={formData.address}
                 onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update
              </button>
            </form>
          </div>
        </div>
        
        </div>
        {/* </div> */}
    </Layout>
   )
}
export default Profile