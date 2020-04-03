import React from "react";

function Projects() {
  return (
    <div className="custom-aside col-sm-6 flex-column mt-5 pl-5">
      <div className="proj-list mb-3">
        <h2 className="bold-text green-text">>> PROJECTS:</h2>
      </div>

      <div className="proj-list mb-3">
        <a
          href="http://bit.ly/APM-BartendersGuide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="pl-5"> Bartenders_Guide</h2>
        </a>
        <h3 className="pl-5 linespace-med">
          Project using API calls, ReactJS (w/hooks), HTML, and CSS
          (Bootstrap4).
        </h3>
      </div>
      <div className="proj-list mb-3">
        <a
          href="http://bit.ly/APM-PoBoxZero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="pl-5">PO_Box_Zero</h2>
        </a>
        <h3 className="pl-5 linespace-med">
          Project using Python, Django, PostgreSQL, Pillow, Heroku, HTML, and
          CSS (Bootstrap4).
        </h3>
      </div>
      <div className="proj-list mb-3">
        <a
          href="http://bit.ly/APM-NBA_Trivia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="pl-5">NBA_Trivia_Game</h2>
        </a>
        <h3 className="pl-5 linespace-med">
          First project using JavaScript, HTML, and CSS (Bootstrap4).
        </h3>
      </div>
      <div className="proj-list mb-3 mt-5">
        <h2 className="bold-text green-text">>> Résumé || CV</h2>
      </div>
      <div className="proj-list mb-3">
        <a
          href="https://www.dropbox.com/s/d7n7qxk226kl4ah/APM-Resume.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="pl-5">Download PDF</h2>
        </a>
        <h3 className="pl-5 linespace-med">via Dropbox</h3>
      </div>
      <div className="proj-list mb-3">
        <a
          href="https://www.linkedin.com/in/aldomarukot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="pl-5">LinkedIn Profile</h2>
        </a>
        <h3 className="pl-5 linespace-med">
          View detailed work experience & onnect with me.
        </h3>
      </div>
      <div className="proj-list mb-3">
        <a
          href="https://www.behance.net/runelighter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="pl-5">Behance Profile</h2>
        </a>
        <h3 className="pl-5 linespace-med">Some of my design work.</h3>
      </div>
    </div>
  );
}

export default Projects;
