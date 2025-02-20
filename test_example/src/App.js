import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';

function App() {
  return (
    <div>
     <Navbar/>

     <h1 className='text-center'>Welcome User</h1>
     <div className='card-group'>
     <Cards title="XYZ" description="dummy description"/>
     <Cards/>
     <Cards/>

     <Cards/>
     <Cards/>
     <Cards/>

     </div>

    
    </div>
  );
}

export default App;
