import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import AdminMenu from '../../Components/Layout/AdminMenu'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal'

Modal.setAppElement('#root');  // Make sure to bind modal to your app element (for accessibility)

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth] = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const getOrders = async () => {
    try {
      if (auth?.user?._id) {
        const res = await axios.get(`http://localhost:3006/api/v1/order/getorders`);
        setOrders(res.data.orders);

        const details = {};
        res.data.orders.forEach(order => {
          details[order._id] = {
            quantity: order.quantity,
            productName: order.productName,
            productphoto: order.productphoto,
            totalPrice: order.totalPrice,
            payment: order.payment,
            status: order.status,
            ss: order.photo,  // Payment screenshot URL
            name: order.userName,
            userNumber: order.userNumber,
            user2Number: order.user2Number,
            userAddress: order.userAddress,
          };
        });
        setOrderDetails(details);
      }
    } catch (error) {
      console.error(error);
      setError('Error fetching orders. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleOrderChange = (orderId, field, value) => {
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [orderId]: {
        ...prevDetails[orderId],
        [field]: value,
      },
    }));
  };

  const updateOrder = async (orderId) => {
    try {
      const updatedOrderDetails = orderDetails[orderId];
      const res = await axios.post(`http://localhost:3006/api/v1/order/updateorder/${orderId}`, updatedOrderDetails);
      toast.success(res.data.message || 'Order updated successfully!');
      getOrders();
    } catch (error) {
      console.error('Error updating order:', error);
      toast.error('Failed to update the order. Please try again.');
    }
  };

  useEffect(() => {
    if (auth?.user) {
      getOrders();
    }
  }, [auth?.user]);

  const handleRetry = () => {
    setError(null);  // Clear the error message
    getOrders();     // Retry fetching orders
  };

  // Open the modal with the full-screen image
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  const statusOrder = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];
  const statusHighlightColors = {
    Shipped: 'bg-blue-300 text-black',
    Delivered: 'bg-green-300 text-black',
    Pending: 'bg-yellow-300 text-black',
    Cancelled: 'bg-red-300 text-black',
  };

  const sortedOrders = [...orders].sort((a, b) => {
    return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
  });

  return (
    <Layout title={"Your Orders"}>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <AdminMenu />

      <div className="container mx-auto p-4 sm:p-5">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
          </div>

          <div className="w-full lg:w-3/4 p-5 bg-white rounded-lg shadow-lg">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">All Orders</h1>

            {error && (
              <div className="text-red-500 mb-4">
                {error} <button onClick={handleRetry} className="text-blue-500 underline">Retry</button>
              </div>
            )}

            {sortedOrders.length === 0 ? (
              <div className="text-center text-gray-500">No orders found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="border px-2 py-2">Product</th>
                      <th className="border px-2 py-2">Quantity</th>
                      <th className="border px-2 py-2">Amount</th>
                      <th className="border px-2 py-2">User Details</th>
                      <th className="border px-2 py-2">Payment</th>
                      <th className="border px-2 py-2">Status</th>
                      <th className="border px-2 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedOrders.map((order) => (
                      <tr key={order._id}>
                        <td className="border px-2 py-2">
                          <div className="font-semibold">{orderDetails[order._id]?.productName || order.productName}</div>
                          <img
                            src={orderDetails[order._id]?.productphoto || order.productphoto}
                            alt={order.productName}
                            className="w-16 h-16 object-cover rounded-md shadow-sm mt-2"
                          />
                        </td>
                        <td className="border px-2 py-2 text-center">
                          <input
                            type="number"
                            value={orderDetails[order._id]?.quantity || order.quantity}
                            onChange={(e) => handleOrderChange(order._id, 'quantity', e.target.value)}
                            className="border rounded-md p-1 w-12 text-center focus:outline-none focus:ring focus:ring-blue-400"
                          />
                        </td>
                        <td className="border px-2 py-2 text-center">
                          ₹{orderDetails[order._id]?.totalPrice || order.totalPrice}
                        </td>
                        <td className="border px-2 py-2 text-sm">
                        <td className="border px-2 py-2 text-sm">
  <p><span className="font-semibold"> </span> {orderDetails[order._id]?.name || order.userName}</p>
  <p><span className="font-semibold">  </span> {orderDetails[order._id]?.userPhone || order.userNumber}</p>
  <p><span className="font-semibold">  </span> {orderDetails[order._id]?.userPhone2 || order.user2Number}</p>
  <p><span className="font-semibold"> </span> {orderDetails[order._id]?.userAddress || order.userAddress}</p>
</td>


                        </td>
                        <td className="border px-2 py-2 text-center">
                          <select
                            value={orderDetails[order._id]?.payment || order.payment}
                            onChange={(e) => handleOrderChange(order._id, 'payment', e.target.value)}
                            className="border rounded-md p-1 focus:outline-none focus:ring focus:ring-blue-400"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                            <option value="Failed">Failed</option>
                          </select>

                          {/* Payment screenshot */}
                          {orderDetails[order._id]?.ss && (
                            <img
                              src={orderDetails[order._id]?.ss}
                              alt="Payment Screenshot"
                              className="w-16 h-16 object-cover rounded-md shadow-sm mt-2 cursor-pointer"
                              onClick={() => openModal(orderDetails[order._id]?.ss)}
                            />
                          )}
                        </td>
                        <td className="border px-2 py-2 text-center">
                          <span className={`p-1 rounded-md ${statusHighlightColors[orderDetails[order._id]?.status || order.status] || ''}`}>
                            {orderDetails[order._id]?.status || order.status}
                          </span>
                          <select
                            value={orderDetails[order._id]?.status || order.status}
                            onChange={(e) => handleOrderChange(order._id, 'status', e.target.value)}
                            className="border rounded-md p-1 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                          >
                            {statusOrder.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="border px-2 py-2 text-center">
                          <button
                            onClick={() => updateOrder(order._id)}
                            className="bg-blue-500 text-white rounded-md py-1 px-2 hover:bg-blue-600 transition duration-200"
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for full-screen payment screenshot */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Payment Screenshot"
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <img src={modalImage} alt="Full-screen Payment Screenshot" className="max-w-full max-h-full" />
        <button onClick={closeModal} className="absolute top-5 right-5 text-white text-xl">X</button>
      </Modal>
    </Layout>
  );
};

export default OrderList;
