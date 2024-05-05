import StyledCountainer from "./Container.style";

function Container(props) {
  return <StyledCountainer>{props.children}</StyledCountainer>;
}

export default Container;
