import logo from './logo.svg';
import './App.css';
import A from './Components/A';
import RefExample from './Components/RefExample';
import useInternet from './Components/useInternet';
import Parent from './Components/Parent';

function App() {
  let internetStatus = useInternet();

  return (
    <div className="App">
      <Parent/>
      <h1>{internetStatus?"You Are Online":"You Are Offline"}</h1>
      <h1>React</h1>
      <hr/>
      <A/>
      <RefExample/>
    </div>
  );
}

export default App;
