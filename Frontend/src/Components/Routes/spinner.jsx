import React ,{useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
const Spinner= ({path="login"})=>{
    const [count,setCount]=useState(3)
    const navigate=useNavigate()
    const location = useLocation()
    useEffect(() => {
        const interval = setInterval(()=>{
            setCount((prevValue) => --prevValue)
        },1000)
        count === 0 && navigate(`/${path}`,{state:location.pathname})
        return () => clearInterval(interval)
    },[count,navigate,location,path])
    return(
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="container mx-auto mt-3 text-center">
      {/* Spinner */}<h2 className="text-xl text-center font-bold mb-4">redirecting to you in {count}</h2>

          <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            
          <div className="w-12 h-12 border-4 border-gray-900 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
      </div>
    )
}
export default Spinner