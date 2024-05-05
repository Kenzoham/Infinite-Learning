import React from "react";
import StyledTitle from "./Title.style";

function Title(props) {
  const { titleText, subtitleText } = props;

  return (
    <StyledTitle>
      <div className="container">
        <h2 className="title">{titleText}</h2>
        <p className="subtitle">{subtitleText}</p>
      </div>
    </StyledTitle>
  );
}

export default Title;
