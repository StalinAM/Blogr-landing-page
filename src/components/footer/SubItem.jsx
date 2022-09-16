import React from "react";
import styled from "styled-components";
const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.GrayishBlue};
  font-weight: bold;
  text-align: center;
  list-style: none;
  margin: 25px 0;
`;
const Item = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: var(--Grayish-blue);
  font-weight: normal;
  @media (min-width: 1170px) {
    &:hover {
      text-decoration: underline ${(props) => props.theme.GrayishBlue};
    }
  }
`;
const ItemContainer = styled.li`
  margin-bottom: 10px;
`;
function SubItem({ objItemSub }) {
  return (
    <SubMenu>
      {objItemSub.map((item, index) => (
        <ItemContainer key={index}>
          <Item>{item}</Item>
        </ItemContainer>
      ))}
    </SubMenu>
  );
}

export default SubItem;
