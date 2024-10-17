import React from 'react'
import { Link } from 'react-router-dom'
import { TbCategory } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineInventory } from "react-icons/md";
import { RiListOrdered } from "react-icons/ri";
const AdminMenu = () =>{
    return(
        <div className="p-9 bg-gray-50 min-h-[50vh]">
  <div className="max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Admin Dashboard</h1>
    <ul className="space-y-4">
      <li>
        <Link
          to="/dashboard/admin/create-category"
          className="group bg-gradient-to-r from-red-900 to-black hover:from-grey-500 hover:to-lime-900 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex justify-between items-center"
        >
          <span>Add/Create Category</span>
          <span className="material-icons">
            <TbCategory/>
          </span>
        </Link>
      </li>

      <li>
        <Link
          to="/dashboard/admin/create-product"
          className="group bg-gradient-to-r from-red-900 to-black hover:from-grey-500 hover:to-lime-900 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex justify-between items-center"
        >
          <span>Create Product</span>
          <span className="material-icons"><FiShoppingCart/></span>
        </Link>
      </li>

      <li>
        <Link
          to="/dashboard/admin/products"
          className="group bg-gradient-to-r from-red-900 to-black hover:from-grey-500 hover:to-lime-900 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex justify-between items-center"
        >
          <span>Products</span>
          <span className="material-icons"><MdOutlineInventory /></span>
        </Link>
      </li>

      <li>
        <Link
          to="/dashboard/admin/orderslist"
          className="group bg-gradient-to-r from-red-900 to-black hover:from-grey-500 hover:to-lime-900 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex justify-between items-center"
        >
          <span>Orders List</span>
          <span className="material-icons"><RiListOrdered/></span>
        </Link>
      </li>
    </ul>
  </div>
</div>


    )
}
export default AdminMenu