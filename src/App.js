import "./App.css";
import Header from "./components/Header";
import Generator from "./components/Generator";
import Output from "./components/Output";
import Footer from "./components/Footer";
import { useState } from "react";

import ReactGA from "react-ga4";

  

function App() {
  const [output, setOutput] = useState([]);
  const [paragraphs, setParagraphs] = useState(false);
  const [copied, setCopied] = useState(false);

  const TRACKING_ID = "G-YGC5RRJ8ZV"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);


  return (
    <div className="content-wrap">
      <Header />
      <Generator setOutput={setOutput} setParagraphs={setParagraphs} setCopied={setCopied} />
      <Output output={output} paragraphs={paragraphs} copied={copied} setCopied={setCopied} />
      <Footer />
    </div>
  );
}

export default App;
