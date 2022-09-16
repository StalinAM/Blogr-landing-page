import React, { useState } from "react";
import styled from "styled-components";
import Submenus from "./Submenus";
const Item = styled.li`
margin-bottom: 2em;
  @media (max-width: 970px) {
    margin-bottom: 28px;
    position: relative;
  }
`;
const Arrow = styled.img`
  margin-left: 5px;
  margin-bottom: 2px;
  rotate: prop;
  transform: ${(props) => (props.click ? "rotate(180deg)" : "0")};
`;
const Ref = styled.a`
  color: ${(props) => props.theme.White};
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline ${(props) => props.theme.White};
  }
  @media (max-width: 1170px) {
    font-weight: 500;
    color: ${(props) => props.theme.VeryDarkBlue};
    &:hover {
      text-decoration: none;
    }
  }
`;
function ItemMenu({ text, ref, objItemSub }) {
  const [click, setClick] = useState(false);
  return (
    <Item>
      <Ref click={click}
        onClick={() => setClick(!click)}  href={ref}>{text}</Ref>
      <picture>
        <source
          media="(min-width:1170px)"
          srcSet="./assets/icon-arrow-light.svg"
        />
        <Arrow  click={click} src="./assets/icon-arrow-dark.svg" />
      </picture>
      <Submenus click={click} objItemSub={objItemSub} />
    </Item>
  );
}

export default ItemMenu;
