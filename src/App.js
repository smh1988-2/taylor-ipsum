import "./App.css";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState([]);
  const [length, setLength] = useState(5)

  const words = ["word one", "word 2", "word 3", "word 4"];

  function generateWords() {
    let newArray =[]
    for (let i = 0; i < length; i++) {
      newArray = [...newArray, words[Math.floor(Math.random() * words.length)]]
    }
    setOutput(newArray);
  }

  return (
    <div>
      <button onClick={generateWords}>Generate words</button>
      {output.join(" ")}
    </div>
  );
}

export default App;
