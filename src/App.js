import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Snack Circus" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://snackcircus.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Snack Circus</h1>
          <p>Concession Equipment's, Ingredients and Accessories</p>
        </a>
      </header>
    </div>
  );
}

export default App;
