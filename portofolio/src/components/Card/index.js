import React from "react";
import StyledCard from "./Card.style";
import ProjectL from "../../assets/img/Web Lenovo.png";
import ProjectC from "../../assets/img/web19.png";
import Android from "../../assets/img/porto2.png";


function Card() {

  return (
    <StyledCard>
      <div>
        <p className="card__body">Website Persebaran Covid 19 Global</p>
        <img className="card__image" src={ProjectC} alt="placeholder" />
        <div className="card__link"></div>
      </div>

        <p className="card__body">Nutri Scan</p>
        <img className="card__image" src={Android} alt="placeholder" />
        <div className="card__link"></div>
   

        <p className="card__body">Website Launching Produk</p>
        <img className="card__image" src={ProjectL} alt="placeholder" />
        <div className="card__link"></div>
    </StyledCard>
  );
}

export default Card;
