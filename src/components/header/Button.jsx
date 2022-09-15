import styled from "styled-components";
const Btn = styled.button`
  color: ${(props) =>
    props.text == "Sign Up" || props.text == "Start for Free"
      ? props.theme.LightRed
      : props.theme.White};
  border: ${(props) =>
    props.text !== "Login" ? `1px solid ${props.theme.White}` : "none"};
  border-radius: 24px;
  padding: 10px ${(props) => (props.text == "Sign Up" ? "32px" : "18px")};
  font-size: 1rem;
  font-weight: bold;
  background: ${(props) =>
    props.text == "Sign Up" || props.text == "Start for Free"
      ? props.theme.White
      : "none"};
  font-family: "Ubuntu", sans-serif;
  @media (max-width: 970px) {
    ${(props) => {
      if (props.text == "Login") {
        return `color: ${props.theme.VeryDarkBlue}`;
      }
      if (props.text == "Sign Up") {
        return `color: ${props.theme.White}; background: linear-gradient(
    270deg,
    ${props.theme.LightRed} 0%,
    ${props.theme.VeryLightRed} 100%
  );`;
      }
    }};
  }
`;
function Button({ text }) {
  return <Btn text={text}>{text}</Btn>;
}

export default Button;
