
import { useState } from 'react';
import { useAuth } from '../../context/auth';
import { FaShoppingCart } from "react-icons/fa"
import toast from "react-hot-toast"
import { NavLink, Link ,useNavigate} from 'react-router-dom';
import useCategory from '../../Hook/Hooks.jsx'
import { useCart } from '../../context/cart.jsx';
import { useSearch } from '../../context/search.jsx';
import SearchInput from '../search/Search.jsx';

function Navbar() {
  const [values,setValues]= useSearch ()
    const navigate = useNavigate()
  const categories=useCategory ();
  const [cart] = useCart();
  const [auth,setAuth]=useAuth()
  const handlelogout=()=>{
     setAuth({
      ...auth,user:null,token:''
     })
     localStorage.removeItem("auth");
     toast.success('Logout Successfully')
  }
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const  handleSumbit = async (e) =>{
    e.preventDefault()
    try {
        const {data} = await axios.get(`http://localhost:3000/api/v1/product/search/${values.keywords}`)
        setValues({...values,result:data});
        navigate('/search')
    } catch (error) {
        console.log(error);
        
    }
}
  return (
    <nav className="bg-gray-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="flex flex-shrink-0 items-start">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div> */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  Home
                </a>
                {/* <a
                  href="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Category
                </a> */}
                {
                  !auth.user ? (<>




{categories.map((category) => (
                         <Link
                         key={category._id}
                         to={`/category/${category._id}`}
                         className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white "
                       >
                         {category.name}
                       </Link>
                       
                       ))}





  
                  <a
                  href="/dashboard"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                >
                 Register
                </a>
                <a
                  href="/login"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                Login
                </a>
                


                  </>) : (<>
                    
                  {/* <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</NavLink> */}
                 
                
                 
                
                {/* <a
                  href="/login"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                Spicial Offers
                </a> */}
                
                

      {categories.map((category) => (
                         <Link
                         key={category._id}
                         to={`/category/${category._id}`}
                         className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white "
                       >
                         {category.name}
                       </Link>
                       
                       ))}
                      

                  </>)
                }
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className='p-1'>
          
          </div>
          {/* <div className="flex justify-center items-center mt-2 p-2 sm:p-4" onSubmit={handleSumbit}>
  <input
    type="text"
    value={values.keyword}
    onChange={(e) => setValues({ ...values, keyword: e.target.value })}
    className="w-full max-w-24 sm:max-w-96 p-1 sm:p-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder="Search..."
  />
  <button className="ml-1 p-1 sm:p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    Search
  </button>
</div> */}
          <SearchInput/>
          <Link to={'/cart'}>
          
          <button
         
  type="button"
  className="relative rounded-full  text-bold mb-4 text-gray-200     hover:text-gray-white focus:outline-none "
>
  <span className="absolute -inset-1.5"></span>
  <span className="sr-only">View notifications</span>
  <h2 className='text-red-800 font-bold mt-2'>{cart?.length}</h2>
  <i className="fas fa-bell h-6 w-6"></i> <FaShoppingCart/>
</button>
</Link>
            {/* Profile dropdown */}
            <div className="relative ml-3 p-2 ">
              <div>
                <button
                  type="button"
                  onClick={toggleProfileDropdown}
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isProfileDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    alt=""
                  />
                </button>
              </div>
              {/* Dropdown menu */}
              {isProfileDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a
                    href={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  {
                    !auth.user ? (<></>):(<>
                    <a
                   href='/cart'
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Cart
                  </a>
                    <a
                    onClick={handlelogout}
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                    >
                      Sign out<a className="block  px-2 py- text-sm text-green-700 font-medium">
                      {auth.user.name}
                      </a>
                    </a></>)
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Home
            </a>
            {
                  !auth.user ? (<>

{categories.map((category) => (
                         <Link
                         key={category._id}
                         to={`/category/${category._id}`}
                         className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
                       >
                        <a> {category.name}</a>
                       </Link>
                       
                       ))}
                    <a
              href="/register"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
                Register
            </a>
            <a
              href="/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Login
            </a>
            
            </>):(<>
              <a
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
             Home
            </a>
            {categories.map((category) => (
                         <Link
                         key={category._id}
                         to={`/category/${category._id}`}
                         className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
                       >
                        <a> {category.name}</a>
                       </Link>
                       
                       ))}
                      
            </>)}
          
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


