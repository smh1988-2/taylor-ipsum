import "./App.css";
import Header from "./components/Header";
import Generator from "./components/Generator";
import Output from "./components/Output";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [output, setOutput] = useState([]);
  const [paragraphs, setParagraphs] = useState(false)


  return (
    <div className="content-wrap">
      <Header />
      <Generator setOutput={setOutput} setParagraphs={setParagraphs} />
      <Output output={output} paragraphs={paragraphs} />
      <Footer />
    </div>
  );
}

export default App;
