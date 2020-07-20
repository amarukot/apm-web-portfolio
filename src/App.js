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
      <div className="text-center">
        <NavBar />
        <main className="mx-auto w-100 d-flex flex-column h-100">
          <Aldo />
          <div className="row mx-auto ">
            <Route path="/" className="sticky-top" component={Summary} />
            <Route exact path="/" component={LinkedInBadge} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
