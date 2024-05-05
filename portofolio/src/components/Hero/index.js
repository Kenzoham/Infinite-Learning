import React from "react";
import StyledHero from "./Hero.style";
import Button from "../UI/Button";
import IlhamImage from "../../assets/img/VBG - ILHAM.png";

function Hero() {
  const handleButtonClick = () => {
    window.open("https://www.linkedin.com/in/abdullahilham/");
  };

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">Abdullah Ilham</h2>
          <h3 className="hero__tagline">Technology Enthusiast</h3>
          <p className="hero__description">
            In my fifth semester as a Computer Science student, I've explored
            web development and Android app creation, finding joy in overcoming
            challenges and debugging. As a teaching assistant for a Database
            Management course, I gained insights into practical applications of
            MySQL. I'm dedicated to refining my coding skills and aspire to
            contribute to a development team with enthusiasm and technical
            prowess.
          </p>
          <Button variant="primary" onClick={handleButtonClick}>
            LinkedIn
          </Button>
        </div>
        <div className="hero__right">
          <img
            className="hero__image"
            src={IlhamImage}
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
