import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <ThemeProvider prefixes={{ btn: "my-btn", tooltip: "my-tooltip" }}>
        <div className="App container">
          <Wrapper />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
