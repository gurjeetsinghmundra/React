import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div >
      
      {/* anchor tag will refresh the page so react has problem with it
      to avoid it we use link in React */}
      <Navbar/>

    </div>
  );
}

export default App;
