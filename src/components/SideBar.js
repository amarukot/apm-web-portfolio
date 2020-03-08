import React from "react";

function SideBar() {
  return (
    <div className="custom-aside col-sm-4 flex-column mt-5">
      <div className="proj-list mb-5">
        <a
          href="https://www.dropbox.com/s/d7n7qxk226kl4ah/APM-Resume.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>>> CV / résumé</h2>
        </a>
      </div>
      <div className="proj-list">
        <h2>>> PROJECTS:</h2>
      </div>
      <div className="proj-list">
        <a
          href="http://bit.ly/APM-NBA_Trivia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>... NBA Trivia Game</h2>
        </a>
      </div>
      <div className="proj-list">
        <a
          href="http://bit.ly/APM-BartendersGuide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>... Bartender's Guide</h2>
        </a>
      </div>
      <div className="proj-list">
        <a
          href="http://bit.ly/APM-PoBoxZero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>... PO Box Zero</h2>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
