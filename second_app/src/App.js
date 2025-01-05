import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';




//we need to write this
//search in google react routing dom or routing in dom
//routing with createBrowserRouter
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/footer",
          element:<Footer/>
        }
      ]
      )

function App() {
  return (
    <div >
      
      {/* anchor tag will refresh the page so react has problem with it
      to avoid it we use link in React */}
      {/* <Navbar/> */}

        <RouterProvider router={router}/>        

    </div>
  );
}

export default App;
