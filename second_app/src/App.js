import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Product from './components/Product';


//we need to write this
//search in google react routing dom or routing in react
//routing with createBrowserRouter
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import NotFound from './components/NotFound';


const router = createBrowserRouter([
        {
          path:"/about",
          element:<><Navbar/> <About/> <Footer/></> //will display about betweeen navbar and footer
        },
        {
          // object me key id naam se banegi
          path:"/contact/:id",
          element:<><Navbar/> <Contact/> <Footer/></>
        },
        {
          path:"/",  //this is for home page(which comes in front when we open the web page)
          element:<>
              <Navbar/>
              <Footer/>
          </>
        },
        {
          path:"*",  //jitne routes banaye hai usko chordke saare
          element:<NotFound/>
        },
        {
          path:"/product/:id",
          element:<><Navbar/><Product/> <Footer/></>
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
