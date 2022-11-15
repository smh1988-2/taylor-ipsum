import React from "react";

function Output({ output, paragraphs }) {
    console.log(output.length)
    console.log(paragraphs)

  return (
    <div className="output-container">
        
      <p className="output-text">{output.splice(0, 2).join(" ")}</p>

      <p className="output-text">{output.join(" ")}</p>

      <p className="output-text">{output.join(" ")}</p>
    </div>
  );
}

export default Output;
