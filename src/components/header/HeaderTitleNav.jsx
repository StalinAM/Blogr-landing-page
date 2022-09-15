import { useState } from "react";
import Home from './Home'
import styled from "styled-components";
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
  background-position: -336px -247px, center;
  background-image: url(./src/assets/bg-pattern-intro-mobile.svg),
    linear-gradient(
      ${(props) => props.theme.VeryLightRedG},
      ${(props) => props.theme.LightRedG}
    );
  margin-bottom: 104px;
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
