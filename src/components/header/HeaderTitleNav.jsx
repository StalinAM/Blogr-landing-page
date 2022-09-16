import { useState } from "react";
import Home from './Home'
import styled from "styled-components";
import pattern from '../../assets/bg-pattern-intro-mobile.svg'
import NavBar from "./NavBar";
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  text-align: center;
  border-radius: 0 0 0 86px;
  background-repeat: no-repeat;
  background-position: center, center;
  background-image: url(${pattern}),
    linear-gradient(
      ${(props) => props.theme.VeryLightRedG},
      ${(props) => props.theme.LightRedG}
    );
  font-family: "Overpass", sans-serif;
  padding: 25px 30px;
`;

function HeaderTitleNav() {
  const [click, setClick] = useState(false);
  return (
    <Header>
      <NavBar />
      <Home/>
    </Header>
  );
}

export default HeaderTitleNav;
