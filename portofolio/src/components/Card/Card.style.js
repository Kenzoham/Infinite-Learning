import styled from "styled-components";

const StyledCard = styled.div`
  flex: 1;
  padding: 3rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  .card__title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #212529;
  }

  .card__body {
    font-size: 2.5rem;
    margin-top: 1rem;
    color: #ef476f;
  }

  .card__image {
    width: 56rem;
    border-radius: 1rem;
    
  }

  .card__link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;

    &::before {
      content: "";
      display: inline-block;
      border-style: solid;
      border-width: 0.25rem 0.25rem 0 0;
      height: 0.75rem;
      width: 0.75rem;
      transform: rotate(-45deg);
      margin-right: 0.5rem;
      border-color: #212529;
    }

    &:hover::before {
      border-color: #06d6a0;
    }

    &:hover {
      color: #06d6a0;
    }
  }

  /* Responsive Styles */
  @media screen and (max-width: 768px) {
    flex-basis: calc(50% - 1rem);
    margin: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    flex-basis: 100%;
    margin: 0.5rem;
  }
`;

export default StyledCard;
