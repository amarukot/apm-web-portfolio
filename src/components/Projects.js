import React from "react";

function Projects() {
  return (
    <div className="custom-aside col-sm-6 flex-column mt-5 pl-5">
      <div className="proj-list mb-5">
        <a
          href="https://www.dropbox.com/s/d7n7qxk226kl4ah/APM-Resume.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="bolder"> => CV / résumé</h2>
        </a>
      </div>
      <div className="proj-list">
        <h2 className="bolder mb-3">=> PROJECTS:</h2>
      </div>
      <div className="proj-list">
        <a
          href="http://bit.ly/APM-NBA_Trivia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="pl-5">_NBA_Trivia_Game</h2>
        </a>
        <h3 className="pl-5">
          First project using JavaScript, HTML, and CSS (Bootstrap4).
        </h3>
      </div>
      <div className="proj-list">
        <a
          href="http://bit.ly/APM-BartendersGuide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="pl-5"> _Bartenders_Guide</h2>
        </a>
        <h3 className="pl-5">
          Project using API calls, ReactJS (w/hooks), HTML, and CSS
          (Bootstrap4).
        </h3>
      </div>
      <div className="proj-list">
        <a
          href="http://bit.ly/APM-PoBoxZero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="pl-5">_PO_Box_Zero</h2>
        </a>
        <h3 className="pl-5">
          Project using Python, Django, PostgreSQL, Pillow, Heroku, HTML, and
          CSS (Bootstrap4).
        </h3>
      </div>
    </div>
  );
}

export default Projects;
