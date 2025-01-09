import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Courses from './components/Courses';
import CourseItem from './components/CourseItem';
import GithubCard from './components/GithubCard';


//we need to write this
//search in google react routing dom or routing in react
//routing with createBrowserRouter
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound';


const router = createBrowserRouter([
  {
    path: "/about",
    element: <><Navbar /> <About /> <Footer /></> //will display about betweeen navbar and footer
  },
  {
    // object me key id naam se banegi
    path: "/contact/:id",
    element: <><Navbar /> <Contact /> <Footer /></>
  },
  {
    path: "/",  //this is for home page(which comes in front when we open the web page)
    element: <>
      <Navbar />
      <Footer />
    </>
  },
  {
    path: "*",  //jitne routes banaye hai usko chordke saare
    element: <NotFound />
  },
  {
    path: "/product/:id",
    element: <><Navbar /><Product /> <Footer /></>
  },
  {
    path: "/courses",
    element: <><Navbar /><Courses /> <Footer /></>,
    children: [

      {
        index: true,
        //by default courses me kya rahega (jab course ka page open karange toh sql dikhega)
        //which is called index
        // we have selected sql
        // element:<CourseItem id={2} name="Foundation with Sql" fees={25000}/>

        // to show multiple course
        element: <><CourseItem id={1} name="Web designing" fees={20000} />
          <CourseItem id={2} name="Foundation with Sql" fees={25000} />
          <CourseItem id={3} name="Core & Advance Java" fees={60000} />
        </>
      },
      {
        path: "web-designing",
        element: <CourseItem id={1} name="Web designing" fees={20000} />
      },
      {
        path: "sql",
        element: <CourseItem id={2} name="Foundation with Sql" fees={25000} />
      }, {
        path: "java",
        element: <CourseItem id={3} name="Core & Advance Java" fees={60000} />
      }]
  },
  // End of courses
  {
    path: "/github-card",
    element: <GithubCard />
  }
])

function App() {
  return (
    <div >

      {/* anchor tag will refresh the page so react has problem with it
      to avoid it we use link in React */}
      {/* <Navbar/> */}

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
