import List from "../List";
import NavbarStyled from "./Navbar.style";

function Navbar() {
  return (
    <NavbarStyled>
      <nav>
        <div>
          <h1>PortoFolio</h1>
        </div>
        <div>
          <List />
        </div>
      </nav>
    </NavbarStyled>
  );
}

export default Navbar;
