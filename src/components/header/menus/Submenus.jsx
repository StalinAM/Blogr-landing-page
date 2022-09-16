import React from "react";
import styled from "styled-components";
import ItemsSubmenu from "./ItemsSubmenu";
const SubMenu = styled.ul`
  margin-top: 12px;
  list-style: none;
  width: 275px;
  background-color: hsl(0deg 0% 91%);
  border-radius: 6px;
  padding: 12px 0;
  display: ${(props) => (props.click ? "display" : "none")};
  @media (min-width: 1170px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 150px;
    box-shadow: 0px 3px 103px -38px ${(props) => props.theme.VeryDarkDesaturatedBlue};
    background-color: ${(props) => props.theme.White};
    align-items: flex-start;
    padding: 27px 23px;
    text-decoration: none;
    display: ${(props) => (props.click ? "display" : "none")};
  }
`;

function Submenus({ objItemSub, click }) {
  return (
    <SubMenu click={click}   >
      {objItemSub.map((item, index) => (
        <ItemsSubmenu key={index} text={item} />
      ))}
    </SubMenu>
  );
}

export default Submenus;
