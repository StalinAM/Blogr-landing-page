import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { DataContext } from "../../context/Data";
import SubItem from "./SubItem";
const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  background-color: ${props=> props.theme.VeryDarkBlackBlue};
  border-radius: 0 86px 0 0;
  font-size: 1.2rem;
  @media (min-width: 1170px) {
    display: grid;
    grid-template-columns: 30% 60%;
    justify-items: center;
    align-items: start;
  }
`;
const ImageLogo = styled.img`
  min-width: 4.5em;
  margin: 78px 0;
`;
const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.White};
  font-weight: bold;
  text-align: center;
  list-style: none;
  margin-bottom: 44px;
  @media (min-width: 1170px) {
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    column-gap: 12em;
    justify-items: center;
    align-items: start;
    margin: 0;
    padding-top: 3em;
  }
`;
const Item = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: var(--Grayish-blue);
  font-weight: normal;
`;
const ItemContainer = styled.li`
     &:last-child{

     }
`;
function Footer() {
  const data = useContext(DataContext);
  return (
    <FooterSection>
      <ImageLogo src={logo} alt="" />
      <SubMenu>
        <ItemContainer>
          Product
          <SubItem objItemSub={data.productSubmenu} />
        </ItemContainer>
        <ItemContainer>
          Companny
          <SubItem objItemSub={data.companySubmenu} />
        </ItemContainer>
        <ItemContainer>
          Connect
          <SubItem objItemSub={data.connectSubmenu} />
        </ItemContainer>
      </SubMenu>
    </FooterSection>
  );
}

export default Footer;
