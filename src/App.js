import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
            <Weather defaultCity="Amsterdam" />
    <span className="footer"><a href="https://github.com/juliavanvuren" target="_blank" rel="noreferrer">Open-source code</a> by Julia van Vuren</span>
    </div>
    </div>
  );
}

