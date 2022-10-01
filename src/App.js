import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
            <Weather defaultCity="Amsterdam" />
    <span className="footer">This project is coded by <a href="https://www.linkedin.com/in/juliavanvuren/" target="_blank" rel="noreferrer">Julia van Vuren</a>, open-sourced on <a href="https://github.com/juliavanvuren" target="_blank" rel="noreferrer">Github</a> &amp; hosted on <a href="https://cosmic-marzipan-25a412.netlify.app/" target="_blank" rel="noreferrer">Netlify</a></span>
    </div>
    </div>
  );
}

