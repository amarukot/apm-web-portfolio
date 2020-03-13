import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Aldo from "./components/Aldo";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Summary from "./components/Summary";

// import bgImg from "./images/code-screenshot-dark.png";
import LinkedInBadge from "./components/LinkedInBadge";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="">
        <header className="App-header">Aldo Marukot</header>
        <div className="App-header">ASIDE</div>
      </div> */}
      <div
        className="container-fluid vh-100"
        // style={{
        //   backgroundImage: 'url("https://giphy.com/embed/Yqn9tE2E00k4U")'
        // }}
      >
        <NavBar />
        <main className="h-100 main-section mx-auto">
          <Aldo />
          <div className="row mx-auto">
            <Route path="/" component={Summary} />
            <Route exact path="/" component={LinkedInBadge} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
