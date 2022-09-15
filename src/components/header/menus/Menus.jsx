import styled from "styled-components";
import ItemMenu from "./ItemMenu";
import { useContext } from "react";
import { DataContext } from "../../../context/Data";
const Menu = styled.ul`
  margin-top: 12px;
  list-style: none;
  gap: 5em;
  @media (min-width: 970px) {
    display: flex;
    flex-direction: row;
  }
`;

function Menus() {
  const data = useContext(DataContext);
  return (
    <Menu>
      <ItemMenu  text={"Product"} objItemSub={data.productSubmenu} />
      <ItemMenu text={"Company"} objItemSub={data.companySubmenu} />
      <ItemMenu text={"Connect"} objItemSub={data.connectSubmenu} />
    </Menu>
  );
}

export default Menus;
