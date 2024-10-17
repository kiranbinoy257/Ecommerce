import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import {useAuth} from '../context/auth.jsx'
import axios from 'axios'
import useCategory from '../Hook/Hooks.jsx'
import { Link } from 'react-router-dom'
import './Home.css'

const Homepage =()=>{
    const[categories]=useCategory()
    const [auth,setAuth]=useAuth()
    const [products,setProducts]=useState([])
    
    //get  all category
   
    const getAllProducts = async () => {
      try {
              // setLoading(true); // Start loading
  
        const { data } = await axios.get("http://localhost:3006/api/v1/product/get-product");
        setProducts(data);
              // setLoading(false); // Stop loading
  
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong");
      }
    };
    useEffect( () => {
        getAllProducts();

    },[])
    const features = [
      {
        icon: "🚚", // You can replace these with actual SVG or icon components
        title: "Free Shipping",
        description: "on all pre-paid domestic orders",
      },
      {
        icon: "🔄",
        title: "Easy Returns",
        description: "Hassle-free 7 day returns",
      },
      {
        icon: "😊",
        title: "1 Lakh+",
        description: "Happy customers",
      },
      {
        icon: "✔️",
        title: "COD Available",
        description: "Pay Securely on Delivery",
      },
    ];
    return(
        <Layout>
         <div className="bg-gray-200 py-8">
         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-right">
        <div className="image max-w-xs lg:max-w-sm display-flex rounded-lg overflow-hidden shadow-lg">
            <img 
                src="https://www.nutraingredients.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients.com/news/markets-and-trends/nutrition-giant-reveals-taste-trends-for-2020/10559270-1-eng-GB/Nutrition-giant-reveals-taste-trends-for-2020.jpg" 
                alt="Spice World" 
                className="object-cover w-full h-full"
            />
        </div>

        <div className=" text-container flex flex-col justify-center items-center lg:items-left lg:ml-10 mt-10 lg:mt-0">
            <h1 className="text-3xl text-center font-bold text-red-700 mb-4">Unleash the Flavor of the World!</h1>
            <h2 className="text-xl font-semibold text-center text-yellow-600 mb-4">Premium Spices Delivered Fresh to Your Doorstep</h2>
            <p className="text-lg text-black max-w-lg mb-6 text-center lg:text-center">
                From vibrant turmeric and aromatic cinnamon to fiery chili powder and exotic saffron, we have everything you need to create unforgettable meals. 
                Browse our extensive collection and find your perfect spice match.
            </p>

            {/* <div className="flex flex-col items-center lg:items-start">
                <h1 className="text-6xl text-green-500 font-bold mb-2">20% Off</h1>
                <h4 className="text-2xl text-red-800 font-bold">NOW</h4>
            </div> */}
        </div>
    </div>


           <div className="container mx-auto  bg-gradient-to-b from-green-50 to-gray-200 py-8">
           
           
           <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products?.map((p) => (
              <div key={p._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Link to={`/product/${p._id}`}>
                  <div className="w-full h-60 lg:h-80">
                    <img
                      src={p.photo}
                      className="w-full h-full object-cover"
                      alt={p.name}
                    />
                  </div>
                  <div className="p-4">
  <h5 className="text-lg font-semibold mb-2">{p.name}</h5>
  <p className="text-gray-600">{p.description}</p>

  <div className="flex items-center justify-between mt-2">
    <h2 className="text-xl text-green-600 font-bold">
      ₹{p.price.toLocaleString('en-US')}
    </h2>
    <h3 className="text-red-500 line-through">
      ₹{p.MRP}
    </h3>
  </div>

  {p.MRP > p.price && (
    <div className="text-sm text-green-500 font-semibold mt-1">
       {Math.round(((p.MRP - p.price) / p.MRP) * 100)}% off
    </div>
  )}
</div>


                </Link>
              </div>
            ))}
          </div>
  
</div>

<div className="bg-gray-200 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-4xl mb-4">{feature.icon}</span>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

          </div>
        </Layout>
    )
}
export default Homepage
