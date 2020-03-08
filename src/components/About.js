import React from "react";

function About() {
  return (
    <div className="custom-aside flex-column mt-5">
      <h3>## ABOUT ME ##</h3>
      <h3 className=" p-3 mr-3">
        ... was Born {"&"} Raised Filipino <br />
        ... has 20+ years graphic design experience. <br />
        ... likes food. ALL kinds of food. <br />
        ... recently completed Software Engineering Immersive Course at{" "}
        <a href="https://generalassemb.ly/">General Assembly</a>. <br />
        ... likes video games: RPG, FPS, and basketball. <br />
        ... studied Industrial Engineering at De la Salle University in Manila.
        (ANIMO LA SALLE!) <br />
        ... co-partner of a Filipino food startup in Massachusetts. (shameless
        plug:
        <a href="https://www.thebodegagroup.com/foodega"> Foodega</a>,{" "}
        <a href="https://www.instagram.com/fdga_ma/"> @fdga_ma</a>,{" "}
        <a href="https://www.facebook.com/Foodega.FDGA/">@Foodega.FDGA</a>)
      </h3>
      <h3>
        Want to connect? &nbsp;
        <a href="https://www.linkedin.com/in/aldomarukot">LinkedIn</a> | &nbsp;
        <a href="mailto:aldo.marukot@gmail.com">Email</a>
      </h3>
    </div>
  );
}

export default About;
