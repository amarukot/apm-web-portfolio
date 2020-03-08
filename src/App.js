import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Aldo from "./components/Aldo";
import SideBar from "./components/SideBar";

import bgImg from "./images/code-screenshot-dark.png";

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
        <hr className="green my-0" />
        <main
          className="row h-100 main-section"
          style={{ backgroundImage: bgImg }}
        >
          {/* <Route exact path="/" component={Aldo} /> */}
          <Aldo />
          <SideBar />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
