import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout.jsx';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useParams } from 'react-router-dom';
import UserMenu from '../../Components/Layout/UserMenu.jsx';

const Orders = () => {
  const { userid } = useParams();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      if (auth?.user?._id) {
        const res = await axios.get(`http://localhost:3006/api/v1/order/getorders/${userid}`);
        setOrders(res.data.orders);
        console.log(res.data.orders);
        
      }
    } catch (error) {
      console.error(error);
      setError('Error fetching orders. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  // Mapping of status to colors
  const statusColors = {
    Pending: 'bg-yellow-300 text-black',
    Shipped: 'bg-blue-300 text-black',
    Delivered: 'bg-green-300 text-black',
    Cancelled: 'bg-red-300 text-black',
  };

  return (
    <Layout title={"Your Orders"}>
  <UserMenu />
  <div className="container mx-auto p-5 bg-gradient-to-b from-blue-50 to-white min-h-screen">
    <div className="w-full md:w-3/4 p-8 bg-white rounded-xl shadow-xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">All Orders</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {orders.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">No orders found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, index) => (
            <div 
              key={order._id} 
              className="border p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white hover:bg-gray-50 transform hover:-translate-y-1 transition-transform duration-200"
            >
              <h2 className="font-semibold text-xl text-gray-700 mb-3">{order.productName}</h2>
              <img 
                src={order.productphoto} 
                alt={order.productName} 
                className="w-full h-48 object-cover rounded-md shadow-sm mb-3"
              />
              <div className="flex justify-between items-center text-gray-600 mb-2">
                <span className="font-bold">Quantity:</span>
                <span>{order.quantity}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 mb-2">
                <span className="font-bold">Amount:</span>
                <span>₹{order.totalPrice}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 mb-2">
                <span className="font-bold">Payment:</span>
                <span>{order.payment}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="font-bold">Status:</span>
                <span className={`px-2 py-1 rounded-md text-white ${statusColors[order.status] || 'bg-gray-300'}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</Layout>

  );
};

export default Orders;
