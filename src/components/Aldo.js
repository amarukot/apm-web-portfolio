import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import About from "./About";

function Aldo() {
  return (
    <div className="col-sm-8 mt-5">
      <h1 className="custom-aldo ">Aldo_Marukot ></h1>
      <h3>>> Software Engineer | Graphic Designer</h3>
      <Route path="/about" component={About} />
    </div>
  );
}

export default Aldo;
