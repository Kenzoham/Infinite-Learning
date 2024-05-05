import styled from "styled-components";

const NavbarStyled = styled.div`
  background-color: #2574a9;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.4rem;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      padding: 0 30px;
      max-width: 1440px;
      width: 100%;
    }

    h1 {
      margin: 0;
      padding: 0;
      text-align: center;
      flex-grow: 1;
      font-size: 3.6rem;
      font-weight: 500;
    }
  }

  /* Small Screen */
  @media (max-width: 767px) {
    nav {
      justify-content: center;
    }

    h1 {
      font-size: 2rem;
    }
  }
`;

export default NavbarStyled;
