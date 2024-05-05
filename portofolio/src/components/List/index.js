import React from "react";
import { Link } from "react-router-dom";
import ListContainer from "./List.style";


function List() {
  return (
    <ListContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/porto/about">About</Link>
        </li>
      </ul>
    </ListContainer>
  );
}

export default List;
