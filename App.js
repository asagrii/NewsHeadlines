import logo from './logo.svg';
import './App.css';
import NewsHeadlines from './NewsHeadlines';

// import NewsHeadlines from './Assignment';


function App() {//087a29c1ebc24380903c517fb88e43a7
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Adnan
        </a>
      </header> */}
      <header className="App-header">
        <h1>News API</h1>
      </header>
      <main>
        <NewsHeadlines />
      </main>
      {/* <NewsHeadlines></NewsHeadlines> */}
    </div>
  );
}

export default App;
