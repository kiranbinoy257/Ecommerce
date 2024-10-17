
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';


import Homepage from './Pages/Home.jsx'
import Aboutpage from './Pages/About.jsx'
import Register from './Pages/Auth/Register.jsx'
import Contact from './Pages/contact.jsx'
import Policy from './Pages/Policy.jsx'

import Pagenotfound from './Pages/Pagenotfound.jsx'
import Login from './Pages/Auth/Login.jsx';
import Dashboard from './Pages/user/dashboard.jsx';
import PrivatRoute from './Components/Routes/Private.jsx';
import Forgot from './Pages/Auth/forget.jsx';
import AdminRoute from './Components/Routes/AdminRoute.jsx';
import AdminDashboard from './Pages/Admin/AdminDashboard.jsx';
import CreateCategory from './Pages/Admin/CreateCategory.jsx';
import CreateProduct from './Pages/Admin/CreateProduct.jsx';
import Products from './Pages/Admin/Product.jsx';
import UpdateProduct from './Pages/Admin/UpdateProduct.jsx';
import User from './Pages/Admin/user.jsx';
import Orders from './Pages/user/order.jsx';
import Profile from './Pages/user/Profile.jsx';
import ProductDetails from './Pages/ProductDetail.jsx';
import SearchResult from './Pages/SearchResult.jsx';
import CartPage from './Pages/CartPage.jsx';
import Payment from './Pages/user/payment.jsx';
import OrderList from './Pages/Admin/orderlist.jsx';
import ProductCategory from './Pages/ProductCategory.jsx';
function App() {
  

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
    <Route path='/search' element={<SearchResult/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/category/:id' element={<ProductCategory/>} />

    <Route path="/dashboard" element={<PrivatRoute/>}>
    <Route path="user" element={<Dashboard/>}/>
    <Route path="user/orders/:userid" element={<Orders/>}/>
    <Route path="user/profile" element={<Profile/>}/>
    <Route path="user/payment/:id" element={<Payment/>}/>
    </Route>



    <Route path="/dashboard" element={<AdminRoute/>}>
    <Route path="admin" element={<AdminDashboard/>}/>
    <Route path="admin/create-category" element={<CreateCategory/>}/>
    <Route path="admin/create-product" element={<CreateProduct/>}/>
    <Route path="admin/products" element={<Products/>}/>
    <Route path="admin/update-product/:id" element={<UpdateProduct/>}/>
    <Route path='admin/orderslist' element={<OrderList/>} />
    <Route path="users" element={<User/>}/>
    
    </Route>







    
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/forget' element={<Forgot/>} />


    <Route path="/about" element={<Aboutpage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/policy" element={<Policy/>}/>
    <Route path="/*" element={<Pagenotfound/>}/>
   </Routes>


   </BrowserRouter>
      
    </>
  )
}

export default App
