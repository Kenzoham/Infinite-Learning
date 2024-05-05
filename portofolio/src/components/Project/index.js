import React from "react";
import Card from "../Card";
import StyledProject from "./Project.style";

function Project(props) {
  const { title, subtitle } = props;

  return (
    <StyledProject>
      <section className="global">
        <div className="container">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="global__container">
          <Card />
        </div>
      </section>
    </StyledProject>
  );
}

export default Project;
