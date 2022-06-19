import logo from "./logo.svg";
import "./App.css";
import Capture from "./components/Capture";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Capture img={logo} />
      </header>
    </div>
  );
}

export default App;
