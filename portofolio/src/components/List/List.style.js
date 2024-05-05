import styled from "styled-components";

const ListContainer = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin-left: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  li:hover a {
    color: #cf000f;
  }

  /* Medium Screen */
  @media only screen and (max-width: 768px) {
    ul {
      justify-content: center;
    }

    li {
      margin: 0 0.5rem;
      font-size: 1rem;
    }
  }

  /* Small Screen */
  @media only screen and (max-width: 576px) {
    ul {
      flex-wrap: wrap;
      justify-content: center;
    }

    li {
      margin: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

export default ListContainer;
