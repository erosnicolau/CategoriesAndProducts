import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App container">
        <Wrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
