import React from "react";
import thumb1 from "../images/BarGuideImg.png";
import thumb2 from "../images/POBoxZeroImg.png";
import thumb3 from "../images/NbaTriviaImg.png";

function Projects() {
  var portfolioLink =
    "https://www.dropbox.com/s/9s5n074gfc6luyd/APM-Resume-A4-01.pdf?dl=0";
  return (
    <div className="custom-aside col-sm-6 flex-column mt-5 pl-5 pb-5">
      <div className="proj-list mb-3">
        <h2 className="bold-text green-text">>> PROJECTS:</h2>
      </div>

      <div className="proj-list mb-3 ">
        <a
          href="http://bit.ly/APM-BartendersGuide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className=""> Bartenders_Guide</h2>
          <img className="thumb-img" src={thumb1} />
        </a>
        <h3 className="linespace-med mx-auto pt-2" style={{ width: "500px" }}>
          Cocktail and Mixed Drink recipe search. Built with ReactJS (hooks),
          Bootstrap.
        </h3>
      </div>
      <div className="proj-list mb-3">
        <a
          href="http://bit.ly/APM-PoBoxZero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="">PO_Box_Zero</h2>
          <img className="thumb-img" src={thumb2} />
        </a>
        <h3 className=" linespace-med mx-auto pt-2" style={{ width: "500px" }}>
          Anonymous Postcards (Photos/Messages) using Python, Django,
          PostgreSQL, Pillow, Heroku, HTML, CSS, and Bootstrap.
        </h3>
      </div>
      <div className="proj-list mb-3">
        <a
          href="http://bit.ly/APM-NBA_Trivia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="">NBA_Trivia_Game</h2>
          <img className="thumb-img" src={thumb3} />
        </a>
        <h3 className=" linespace-med mx-auto pt-2" style={{ width: "500px" }}>
          Simple trivia game using JavaScript, HTML, and CSS.
        </h3>
      </div>
      <div className="proj-list mb-3 mt-5">
        <h2 className="bold-text green-text">>> Résumé || CV</h2>
      </div>
      <div className="proj-list mb-3">
        <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
          <h2 className="">Download PDF</h2>
        </a>
        <h3 className=" linespace-med">via Dropbox</h3>
      </div>
      <div className="proj-list mb-3">
        <a
          href="https://www.linkedin.com/in/aldomarukot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="">LinkedIn Profile</h2>
        </a>
        <h3 className=" linespace-med">
          View detailed work experience & connect with me.
        </h3>
      </div>
      <div className="proj-list mb-3">
        <a
          href="https://www.behance.net/runelighter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="">Behance Profile</h2>
        </a>
        <h3 className=" linespace-med">Some of my design work.</h3>
      </div>
    </div>
  );
}

export default Projects;
