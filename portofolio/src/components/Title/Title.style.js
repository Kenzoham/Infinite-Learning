import styled from "styled-components";

const StyledTitle = styled.div`
  .container {
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 1.2;
    color: #06d6a0;
    margin-bottom: 0.5rem;
    font-size: 61px;

    @media only screen and (max-width: 767px) {
      font-size: 36px;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 48px;
    }
  }

  .subtitle {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #118ab2;
    font-size: 25px;

    @media only screen and (max-width: 767px) {
      font-size: 18px;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 21px;
    }
  }
`;

export default StyledTitle;
