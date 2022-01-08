import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "./images/download.png";
import About from "./Components/About";
import pres from "./images/presentation.png";
function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title="Comes With Yoy need For Daily Life" button="Get The App"/>
      <img src={pres} className="pres"/>
      <About image={aboutimage1} title="Download And Get In The APP Now" button="Download"/>
    </div>
  );
}

export default App;
