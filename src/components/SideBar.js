import React from "react";

function SideBar() {
  return (
    <div className="custom-aside col-sm-4 flex-column mt-5">
      <div className="proj-list mb-5">
        <h2>>> CV / résumé</h2>
      </div>
      <div className="proj-list">
        <h2>>> PROJECTS:</h2>
      </div>
      <div className="proj-list">
        <a href="http://bit.ly/APM-NBA_Trivia" target="_blank">
          <h2>... NBA Trivia Game</h2>
        </a>
      </div>
      <div className="proj-list">
        <a href="http://bit.ly/APM-BartendersGuide" target="_blank">
          <h2>... Bartender's Guide</h2>
        </a>
      </div>
      <div className="proj-list">
        <a href="http://bit.ly/APM-PoBoxZero" target="_blank">
          <h2>... PO Box Zero</h2>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
