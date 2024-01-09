import logo from "./mine.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="https://github.com/thandiwemasuku/dictionary" target="_blank" rel="noreferrer">
            <img src={logo} className="logo" alt="Thandis Logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="home" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/thandiwemasuku/dictionary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thandiwe Masuku 👩🏽‍💻
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/thandiwemasuku/dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionary.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
