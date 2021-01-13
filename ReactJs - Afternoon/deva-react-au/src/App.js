import logo from './logo.svg';
import './App.css';
import Bottle from './Bottle.js'
import Table from './Table.js'
import Fetch_API from './Fetch_API';
import Employee from './Employee';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Bottle/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
          Learn React

          <Table/>
          <Fetch_API/>
          <Employee/>
        
      </header>
    </div>
  );
}

//return in line 5
// What we are returning is not HTML it is JS.


export default App;
