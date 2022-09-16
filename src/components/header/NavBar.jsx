import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-hamburger.svg";
import Menus from "./menus/Menus";
import styled from "styled-components";
import BtnContainer from "./BtnContainer";
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 33px;
`;
const ImageLogo = styled.img`
  min-width: 4.5em;
`;
const ImageBurguer = styled.img`
  @media (min-width: 1170px) {
    display: none;
  }
`;
const MenuContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1170px) {
    right: 30px;
    top: 124px;
    position: absolute;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.White};
    width: 315px;
    font-family: "Ubuntu", sans-serif;
    border-radius: 6px;
    padding: 20px;
    box-shadow: 0px 3px 103px -38px ${(props) => props.theme.VeryDarkDesaturatedBlue};
    display: ${(props) =>
      props.click ? "block" : "none"};
  }
`;
const Separator = styled.hr`
  width: 95%;
  margin-top: 30px;
  border: 1px solid ${(props) => props.theme.GrayishBlue};
  @media (min-width: 1170px) {
    display: none;
  }
`;
function NavBar() {
  const [click, setClick] = useState(false);
  return (
    <Nav>
      <ImageLogo src={logo} alt="" />
      <MenuContainer click={click} >
        <Menus />
        <Separator />
        <BtnContainer text1="Login" text2="Sign Up" />
      </MenuContainer>
      <ImageBurguer
        click={click}
        onClick={() => setClick(!click)}
        src={iconMenu}
      />
    </Nav>
  );
}

export default NavBar;
