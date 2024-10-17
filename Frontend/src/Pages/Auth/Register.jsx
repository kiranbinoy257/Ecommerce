
import React,{useState} from 'react'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';


const Register =()=>{
     const [formData,setFormData] =useState({
      name:'',
      email:'',
      phone:'',
      password:'',
      confirmpassword:'',
      address:''
     })
     const navigate = useNavigate();
     const handleChange =(e) =>{
      setFormData({...formData,[e.target.name]:e.target.value});
     };
     const passwordconfirmation = () =>{
      const {password,confirmPassword}=formData;
      if(password !==confirmPassword){
        toast.error('Password do not match')
      return false;
      }
      return true;
      

     }
     const handleSubmit=async  (e) =>{
        e.preventDefault()
        if(!passwordconfirmation()) return;
       try {
         const res= await axios.post(`http://localhost:3006/api/v1/auth/register`,formData);
         if(res.status === 201){
          toast.success(res.data.message)
          navigate('/login')
         }else{
          toast.error(res.data.message)
         }
        
       } catch (error) {
        console.log(error);
        toast.error('Something went wrong')
        
        
       }
        
     }
   return(
    <Layout title={'Register -Ecommerce App'}>
         <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-8">Register</h2>
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
                onChange={handleChange}
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
                  onChange={handleChange}
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
                   onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                  
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                 onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </form>
          </div>
        </div>
    </Layout>
   )
}
export default Register