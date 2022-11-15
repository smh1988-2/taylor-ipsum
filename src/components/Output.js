import React from "react";

function Output({ output, paragraphs }) {

  return (
    <main className="output-container">
      {paragraphs ? (
        <>
          <p className="output-text">
            {output.slice(0, output.length / 3).join(" ")}
          </p>

          <p className="output-text">
            {output.slice(output.length / 3, output.length / 1.5).join(" ")}
          </p>

          <p className="output-text">
            {output.slice(output.length / 1.5, output.length).join(" ")}
          </p>
        </>
      ) : (
        <p className="output-text">{output.join(" ")}</p>
      )}
    </main>
  );
}

export default Output;
