import React from "react";
import Button from "./Button";
import styled from "styled-components";
const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: ${(props) => (props.text1 !== "Login" ? "43px" : "0px")};
  margin-bottom: ${(props) => (props.text1 !== "Login" ? "72px" : "0px")};
  @media (max-width: 1170px) {
    ${(props) =>
      props.text1 == "Login" && "displey: flex; justify-content: center; flex-direction: column; gap: 0; margin: 20px 0px"};
  }
`;
function BtnContainer({ text1, text2 }) {
  return (
    <ContainerBtn text1={text1}>
      <Button text={text1} />
      <Button text={text2} />{" "}
    </ContainerBtn>
  );
}

export default BtnContainer;
