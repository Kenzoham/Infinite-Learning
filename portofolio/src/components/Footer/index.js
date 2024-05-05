import List from "../List";
import StyledFooter from "./Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <div>
          <h2>PortoFolio</h2>
          <p>Developed by Ilham</p>
        </div>
        <div>
          <List />
        </div>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
