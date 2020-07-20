import React from "react";

function Summary() {
  return (
    <div className="custom-aside col-sm-6 mt-5 text-left pl-5 sticky-top">
      <h2 className="green-text bold-text">TL;DR</h2>
      <h3 className=" p-3 mr-3 linespace-med">
        => Filipino born and raised, now living in New England; <br />
        => 20+ yrs Graphic Design experience; <br />
        => completed Software Engineering Immersive Course at{" "}
        <a href="https://generalassemb.ly/">General Assembly</a> <br />
        => studied Industrial Engineering at De la Salle University in Manila.{" "}
        <br />
        => skillset = {"[ "}JavaScript, React.js, Python, Django, MongoDB,
        PostgreSQL, HTML, CSS {" ]"}
        <br />
        => hobbies &#9829; = {"{ "}food: {"[ "}...cuisines{" ]"}, videoGames:{" "}
        {"["}
        "RPG", "FPS"{"]"}, sports: "basketball", movies: {"[ "} ...genres {" ]"}
        {" }"} <br />
        => co-partner of a Filipino food startup in Massachusetts. <br />
        ...(shameless plug:
        <a
          href="https://www.thebodegagroup.com/foodega"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Foodega
        </a>
        ,{" "}
        <a
          href="https://www.instagram.com/fdga_ma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          @fdga_ma
        </a>
        ,{" "}
        <a
          href="https://www.facebook.com/Foodega.FDGA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Foodega.FDGA
        </a>
        )
      </h3>
      <h3>
        <a className="" href="mailto:aldo.marukot@gmail.com">
          <i className="fa fa-envelope fa-lg"></i> aldo.marukot@gmail.com
        </a>
      </h3>
    </div>
  );
}

export default Summary;
