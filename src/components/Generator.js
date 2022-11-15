import React from "react";
import { useState } from "react";

function Generator({ setOutput, setParagraphs }) {
  const [length, setLength] = useState(15);
  const words = ["word one", "word 2", "word 3", "word 4"];

  function generateWords() {
    let newArray = [];
    for (let i = 0; i < length; i++) {
      newArray = [...newArray, words[Math.floor(Math.random() * words.length)]];
      
    }
    setOutput(newArray);
  }

  return (
    <>
      <div className="options-container">
        <select
          name="length"
          id="length"
          onChange={(e) => setLength(e.target.value)}
        >
          <option value="15">15 words</option>
          <option value="30">30 words</option>
          <option value="90">90 words</option>
          <option value="300">300 words</option>
        </select>

        <div>
          <input
            type="checkbox"
            id="paragraph"
            name="paragraph"
            value="paragraph"
            onChange={(e) => setParagraphs(e.target.checked)}
          />
          <label htmlFor="paragraph">Paragraphs</label>
        </div>
      </div>

      <div className="generate-button-container">
        <button className="generate-button" onClick={generateWords}>
          Generate
        </button>
      </div>
    </>
  );
}

export default Generator;
