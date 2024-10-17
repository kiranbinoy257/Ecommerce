import React, { useState, useRef, useEffect } from 'react';
import Layout from '../Components/Layout/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/cart'; 
import { toast} from 'react-hot-toast'
import { Link } from 'react-router-dom';

const ProductDetails = () => {

  const carouselRef = useRef(null);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3006/api/v1/product/getone-product/${id}`);
      setProduct({ ...res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrev = () => {
    const carousel = carouselRef.current;
    const lastChild = carousel.lastElementChild;
    carousel.insertBefore(lastChild, carousel.firstElementChild);
  };

  const handleNext = () => {
    const carousel = carouselRef.current;
    const firstChild = carousel.firstElementChild;
    carousel.appendChild(firstChild);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[73vh] ">
        
        {/* Image Carousel Section */}
        <div className="relative w-full max-w-xl mx-auto max-h-[60vh] object-contain overflow-hidden rounded-lg shadow-lg">
          <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out objectfit-cover">
            {[product.photo, product.photo2, product.photo3, product.photo4, product.photo5].map((photo, index) => (
              <div className="min-w-full" key={index}>
                <img
                  src={photo || product.photo}
                  alt={product.name}
                  className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-300 rounded-lg"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 shadow-md hover:bg-gray-300"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 shadow-md hover:bg-gray-300"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>

        {/* Product Details Section */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-3 ">
         <div className='grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1'>
         <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.size}</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-700">{product.description1}</p>
         </div>

          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl text-green-600 font-bold">
              ₹{product.price}
            </h2>
            {product.MRP > product.price && (
              <div className="text-red-500 line-through">
                ₹{product.MRP}
              </div>
            )}
            {product.MRP > product.price && (
              <div className="text-sm text-green-500 font-semibold">
                {Math.round(((product.MRP - product.price) / product.MRP) * 100)}% off
              </div>
            )}
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="w-1/2 bg-gray-800 text-white py-3 rounded-lg shadow-lg hover:bg-gray-600 transition"
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem('cart', JSON.stringify([...cart, product]));
                toast.success('Item added to cart');
              }}
            >
              Add to Cart
            </button>
            <Link
              className="w-1/2 bg-blue-500 text-white py-3 text-center rounded-lg shadow-lg hover:bg-blue-400 transition"
              to={`/dashboard/user/payment/${product._id}`}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
