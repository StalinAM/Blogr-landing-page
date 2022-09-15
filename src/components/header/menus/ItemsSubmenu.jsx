import React from "react";
import styled from "styled-components";
const ItemSubMenu = styled.li`
  margin-bottom: 12px;
`;
const Item = styled.a`
  color: ${(props) => props.theme.VeryDarkGrayishBlue};
  text-decoration: none;
  font-size: 1.09rem;
  font-weight: 300;
  font-family: "Ubuntu", sans-serif;
  cursor: pointer;
  @media (min-width: 970px) {
    &:hover{
      font-weight: bold;
    }
  }
`;
function ItemsSubmenu({ text }) {
  return (
    <ItemSubMenu>
      <Item>{text}</Item>
    </ItemSubMenu>
  );
}
export default ItemsSubmenu;
