import React from "react";

function Summary() {
  return (
    <div className="custom-aside col-sm-6 mt-5">
      <h2>TL;DR</h2>
      <h3 className=" p-3 mr-3">
        => born {"&&"} raised Filipino; <br />
        => 20+ yrs Graphic Design experience; <br />
        => foodie == true; <br />
        => completed Software Engineering Immersive Course at{" "}
        <a href="https://generalassemb.ly/">General Assembly</a> <br />
        => hobbies = {"{ "}videoGames: {"["}"RPG", "FPS"{"]"}, sports:
        "basketball"
        {" }"} <br />
        => studied Industrial Engineering at De la Salle University in Manila.
        (ANIMO LA SALLE!) <br />
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
        <a className="main-font" href="mailto:aldo.marukot@gmail.com">
          email me
        </a>
      </h3>
    </div>
  );
}

export default Summary;
