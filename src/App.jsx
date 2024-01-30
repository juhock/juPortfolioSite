import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome</h1>
      <div className="card"></div>
      <p>About Me </p>
    </>
  );
}

export default App;
