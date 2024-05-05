
import styled from "styled-components";

const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 5px;
  background: linear-gradient(
    135deg,
    #001529,
    #000428
  );

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 5px solid #fff;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #c5eff7 !important;
  }

  h2 a {
    color: #fff;
    transition: color 0.3s ease;
    text-decoration: none;
  }

  h2 a:hover {
    color: #f72585;
  }

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #fff;
    line-height: 1.5;
  }
`;

export default StyledAboutMe;
