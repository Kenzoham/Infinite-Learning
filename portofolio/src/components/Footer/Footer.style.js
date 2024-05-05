// File: StyledFooter.js

import styled from "styled-components";

const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  height: 187px;
  background: linear-gradient(
    135deg,
    #004e92,
    #000428
  ); /* Dark blue gradient */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin-top: 30px;
    padding: 0 30px;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 39px;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    footer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h2 {
      font-size: 30px;
      text-align: center;
    }

    p {
      font-size: 20px;
      text-align: center;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    /* Styles for medium (tablet) screens */
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 22px;
    }
  }

  @media (min-width: 992px) {
    /* Styles for large (desktop, laptop, tv) screens */
    h2 {
      font-size: 48px;
    }

    p {
      font-size: 28px;
    }
  }
`;

export default StyledFooter;
