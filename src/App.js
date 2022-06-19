import logo from './logo.svg';
import './App.css';
import Text from './components/Text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text text={'test'} defaultParameter={5}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Text text={'value'}/>

      </header>
    </div>
  );
}

export default App;
