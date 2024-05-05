import styled from "styled-components";

const StyledHero = styled.div`
  margin: 5rem auto;
  padding: 1rem;

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__title {
    color: #2574a9;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  .hero__tagline {
    color: #118ab2;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .hero__image {
    max-width: 80%;
    height: auto;
    border-radius: 25px;
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
    }

    .hero {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 40%;
    }

    .hero__right {
      flex-basis: 60%;
      text-align: right;
    }
  }
`;

export default StyledHero;
