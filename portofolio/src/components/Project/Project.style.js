import styled from "styled-components";

const StyledProject = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 1.2;
    color: #2574a9;
    margin-bottom: 0.5rem;
    font-size: 61px;
  }

  .subtitle {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #118ab2;
    font-size: 25px;
  }

  .global {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
  }

  .global__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    margin-top: 40px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default StyledProject;
