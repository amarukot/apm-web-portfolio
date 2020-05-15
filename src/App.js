import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "./sass/animation.scss";
import NavBar from "./components/NavBar";
import Aldo from "./components/Aldo";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

// import bgImg from "./images/code-screenshot-dark.png";
import LinkedInBadge from "./components/LinkedInBadge";

function App() {
  return (
    <BrowserRouter>
      <div id="" className="">
        <NavBar />
        <main className="main-section mx-auto">
          <Aldo />
          <div className="row mx-auto">
            <Route path="/" component={Summary} />
            <Route exact path="/" component={LinkedInBadge} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </main>
        {/* <Footer /> */}
        <footer className="my-footer" id="">
          <div className="container text-center my-3">
            <span className="text-muted">
              &copy; 2020 Aldo Marukot | aldo.marukot@gmail.com
            </span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
