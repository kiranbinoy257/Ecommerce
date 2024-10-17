import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth.jsx'
import { SearchProvider } from './context/search.jsx'
import { CartProvider } from './context/cart.jsx'

createRoot(document.getElementById('root')).render(
  
    
    <AuthProvider>
        <CartProvider>
        <SearchProvider>
        <App />
        </SearchProvider>
        </CartProvider>
    
    </AuthProvider>
    
  
)