import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

// import NavBar from "./components/NavBar";

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
        style={{ backgroundColor: "black" }}
      >
        <NavBar></NavBar>

        <hr className="green my-0" />
        <div className="row h-100">
          <div className="custom-aldo col-sm-8 mt-5">> Aldo_Marukot </div>
          <div className="custom-aside col-sm-4 flex-column mt-5">
            <div className="proj-list">
              <h2>>> CV / résumé</h2>
            </div>
            <div className="proj-list">
              <h2>>> NBA Trivia Game</h2>
            </div>
            <div className="proj-list">
              <h2>>> Bartender's Guide</h2>
            </div>
            <div className="proj-list">
              <h2>>> PO Box 0</h2>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
