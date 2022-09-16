import phones from "../../assets/illustration-phones.svg";
import { useContext } from "react";
import { DataContext } from "../../context/Data";
import styled from "styled-components";

const SectionState = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 30px;
  margin-top: 232px;
  border-radius: 0 86px 0 86px;
  position: relative;
  background-size: 605px, auto;
  background-position: -112px -258px, center;
  background-repeat: no-repeat;
  background-image: url(./src/assets/bg-pattern-circles.svg),
    linear-gradient(
      ${(props) => props.theme.VeryDarkGrayBlue},
      ${(props) => props.theme.VeryDarkDesaturatedBlue}
    );
  @media (min-width: 1170px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SubTitle = styled.h2`
  font-family: "Overpass", sans-serif;
  font-size: 2.4rem;
  letter-spacing: -0.4px;

  font-weight: bold;
  color: ${(props) => props.theme.White};
`;
const Container = styled.article`
  margin-top: 230px;
  @media (min-width: 1170px) {
    margin: 118px 0;
    padding-right: 142px;
    grid-column: 2/3;
    text-align: start;
  }
`;
const Paragraph = styled.p`
  font-family: "Overpass", sans-serif;
  font-size: 1.17rem;
  line-height: 1.4;
  font-weight: 300;
  margin-top: 18px;
  margin-bottom: 114px;
  color: ${(props) => props.theme.GrayishBlue};
  @media (min-width: 1170px) {
    margin: 20px 0 0 0;
  }
`;
const Image = styled.img`
  width: 375px;
  position: absolute;
  top: -183px;
  @media (min-width: 1170px) {
    margin: 0;
    left: 5%;
    top: -4.5em;
    width: 35em;
  }
`;

function Section2({ indexSP }) {
  const data = useContext(DataContext);
  return (
    <SectionState>
      <Image src={phones} alt="phones with the Blogr logo" />
      <Container>
        <SubTitle>{data.subTitle[indexSP]}</SubTitle>
        <Paragraph>{data.paragraph[indexSP]}</Paragraph>
      </Container>
    </SectionState>
  );
}

export default Section2;
