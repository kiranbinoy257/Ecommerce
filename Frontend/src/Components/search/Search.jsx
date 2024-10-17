import React,{useState,useEffect} from "react";
import { useSearch  } from "../../context/search.jsx";
import axios from "axios";
import { useNavigate ,Link } from "react-router-dom";
 const SearchInput =()=>{
    const [values,setValues]= useSearch ()
    const navigate = useNavigate()
    const [products,setProducts]=useState([])

    const  handleSumbit = async (e) =>{
        e.preventDefault()
        try {
            const {data} = await axios.get(`http://localhost:3006/api/v1/product/search/${values.keyword}`)
            setValues({...values,results:data});
            navigate('/search')
        } catch (error) {
            console.log(error);
            
        }
    }
   
    return(
        <div className="flex justify-center items-center mt-2 p-2 sm:p-4" >
        <input
          type="text"
          value={values.keyword}
          onChange={(e) =>setValues({...values, keyword :e.target.value})}
          className="w-full max-w-24 sm:max-w-96 p-1 sm:p-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
        />
        
        <button className="ml-2 p-2 bg-black h-9 text-center sm:max-w-20 max-w-20 text-white rounded-lg hover:bg-blue-100" onClick={handleSumbit}>
        Search
      </button>
      
        </div>
    )

}
export default SearchInput