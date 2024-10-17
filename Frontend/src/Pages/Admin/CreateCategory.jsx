import React, { useState,useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import toast from 'react-hot-toast';
import AdminMenu from '../../Components/Layout/AdminMenu.jsx'
import axios from "axios";

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post("http://localhost:3006/api/v1/category/create-category", {
          name,
        });
        if (data?.success) {
          toast.success(`${name} is created`);
          setName(""); // Clear the input field after submission
          getAllCategory();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong in the input form");
      }
    };
  
    // Get all categories
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get("http://localhost:3006/api/v1/category/get-category");
        if (data?.success) {
          setCategories(data?.category);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong in getting categories");
      }
    };
  
    useEffect(() => {
      getAllCategory();
    }, []);
  
    // Update category
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `http://localhost:3006/api/v1/category/update-category/${selected._id}`,
          { name: updatedName }
        );
        if (data?.success) {
          toast.success(`${updatedName} is updated`);
          setSelected(null);
          setUpdatedName("");
          getAllCategory();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    // Delete category
    const handleDelete = async (pId) => {
      try {
        const { data } = await axios.delete(
          `http://localhost:3006/api/v1/category/delete-category/${pId}`
        );
        if (data.success) {
          toast.success(`Category is deleted`);
          getAllCategory();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
  
    return (
        <Layout title={"Dashboard - Create Category"}>
        <div className="container mx-auto my-6 p-8 bg-gradient-to-r from-blue-50 to-white shadow-xl rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Admin Menu Sidebar */}
            {/* <div className="col-span-1"> */}
              {/* <div className="bg-white p-6 rounded-lg shadow-md"> */}
                <AdminMenu />
              {/* </div> */}
            {/* </div> */}
      
            {/* Main Content */}
            <div className="col-span-3">
              <h1 className="text-4xl font-bold text-gray-800 mb-8">Manage Category</h1>
      
              {/* Create Category Form */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="category" className="block text-lg font-semibold text-gray-700 mb-2">
                      Category Name
                    </label>
                    <input
                      type="text"
                      id="category"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
                      placeholder="Enter category name"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-900 to-black text-white px-6 py-2 rounded-lg w-[30%] text-center hover:bg-blue-600 transition duration-300 w-full"
                  >
                    Create Category
                  </button>
                </form>
              </div>
      
              {/* Categories Table */}
              <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-md">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Name</th>
                      <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.map((c, index) => (
                      <tr key={c._id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="px-6 py-4 text-gray-800 font-semibold">{c.name}</td>
                        <td className="px-6 py-4 flex space-x-4">
                          <button
                            onClick={() => {
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                            className="bg-gradient-to-r from-blue-900 to-black text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(c._id)}
                            className="bg-gradient-to-r from-yellow-500 to-black text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
      
              {/* Edit Category Form */}
              {selected && (
                <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Edit Category</h3>
                  <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                      <label htmlFor="editCategory" className="block text-lg font-semibold text-gray-700 mb-2">
                        Updated Category Name
                      </label>
                      <input
                        type="text"
                        id="editCategory"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-300"
                        placeholder="Enter updated category name"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-green-800 text-white px-6 py-2 rounded-lg w-[35%] hover:bg-green-600 transition duration-300 w-full"
                    >
                      Update Category
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
      
  
    )
  }
  
  export default CreateCategory