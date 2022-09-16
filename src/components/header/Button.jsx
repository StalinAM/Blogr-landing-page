import styled from "styled-components";
const Btn = styled.button`
  color: ${(props) => {
    if (props.text == "Login") {
      return props.theme.VeryDarkBlue;
    } else if (props.text == "Sign Up" || props.text == "Learn More") {
      return props.theme.White;
    } else {
      return props.theme.LightRed;
    }
  }};
  border: ${(props) =>
    props.text !== "Login" ? `1px solid ${props.theme.White}` : "none"};
  border-radius: 24px;
  padding: 10px ${(props) => (props.text == "Sign Up" ? "32px" : "18px")};
  font-size: 1rem;
  font-weight: bold;
  background: ${(props) => {
    if (props.text == "Sign Up") {
      return `linear-gradient(90deg, ${props.theme.LightRed}, ${props.theme.VeryLightRed})`;
    } else if (props.text == "Start for Free" || props.text == "Login") {
      return props.theme.White;
    } else {
      return "none";
    }
  }};
  font-family: "Ubuntu", sans-serif;
  cursor: pointer;

  @media (min-width: 1170px) {
    color: ${(props) =>
      props.text == "Login" || props.text == "Learn More"
        ? props.theme.White
        : props.theme.LightRed};
    border: ${(props) =>
      props.text == "Learn More" ? `1px solid ${props.theme.White}` : "none"};
    background: ${(props) =>
      props.text == "Sign Up" || props.text == "Start for Free"
        ? props.theme.White
        : "none"};
    &:hover {
      background: ${(props) =>
        props.text == "Start for Free" || props.text == "Sign Up"
          ? props.theme.VeryLightRed
          : props.theme.White};
      color: ${(props) =>
        props.text == "Start for Free" || props.text == "Sign Up"
          ? props.theme.White
          : props.theme.VeryLightRed};
      border: ${(props) =>
        props.text == "Start for Free" || props.text == "Sign Up"
          ? props.theme.White
          : props.theme.LightRed};
    }
  }
`;
function Button({ text }) {
  return <Btn text={text}>{text}</Btn>;
}

export default Button;
