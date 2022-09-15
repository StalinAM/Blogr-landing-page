import { useContext } from "react";
import { DataContext } from "../../context/Data";
import styled from "styled-components";
import Button from "./Button";
import BtnContainer from "./BtnContainer";
const HomeSection = styled.section`
  margin: 66px 0;
`;
const Title = styled.h1`
  margin-top: 48px;
  font-size: 2.1rem;
  color: ${(props) => props.theme.White};
`;
const Paragraph = styled.p`
  color: ${(props) => props.theme.GrayishBlue};
  font-size: 1.2rem;
  margin-top: 14px;
`;

function Home() {
  const data = useContext(DataContext);
  return (
    <HomeSection>
      <Title>{data.title[0]}</Title>
      <Paragraph>{data.paragraph[5]}</Paragraph>
      <BtnContainer text1="Start for Free" text2="Learn More" />
    </HomeSection>
  );
}

export default Home;
