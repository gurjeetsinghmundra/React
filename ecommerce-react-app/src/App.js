import logo from './logo.svg';
import './App.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Product from './components/products/Product';
import Navbar from './components/Navbar';
import ProductForm from './components/products/ProductForm';

// Creating routes

//route pe product component mount ho raha hai
const routes = createBrowserRouter([
  { 
    //array ke andhar object
    path:"/products",
    element:<><Navbar/><Product/></>
  },
  {
    path:"/",
    element:<Navbar/>
  }
])

function App() {
  return (
    <div className="">

    <RouterProvider router={routes} />

    </div>
  );
}

export default App;
