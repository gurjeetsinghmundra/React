
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Demo from './components/Demo';
import Practice from './components/Practice';
import ChangeName from './components/ChangeName';



function App() {
  return (
    <div className="App">
    
    <Header/>  

    <h1>First Project</h1>


    <Student id={1} name="Gurjeet"/>
    <Student id={2} name="Gurjeet"/>
    <Footer/>

    <Demo message="Happy New Year" year="2025"/>

    <Practice/>

    <ChangeName/>

    </div>
  );
}




export default App;

//export default function_name
// we need to first export then only we can import
