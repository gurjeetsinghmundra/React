
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Demo from './components/Demo';
import Practice from './components/Practice';
import ChangeName from './components/ChangeName';
import Counter from './components/Counter';
import EvenOdd from './components/EvenOdd';
import DisplayName from './components/DisplayName';
import LoggedIn from './components/LoggedIn';


function App() {
  return (
    <div className="App">
    
    <LoggedIn/>
    <Header/>  

    <h1>First Project</h1>


    <Student id={1} name="Gurjeet"/>
    <Student id={2} name="Gurjeet"/>
    <Footer/>

    <Demo message="Happy New Year" year="2025"/>

    <Practice/>

    <ChangeName/>

    <Counter/>

    <EvenOdd/>

    <DisplayName/>

    {/* <LoggedIn/> */}

    </div>
  );
}




export default App;

//export default function_name
// we need to first export then only we can import
