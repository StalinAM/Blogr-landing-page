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
`;

const SubTitle = styled.h2`
  font-family: "Overpass", sans-serif;
  font-size: 2.6rem;
  letter-spacing: -0.4px;
  margin-top: 230px;
  font-weight: 300;
  color: ${(props) => props.theme.White};
`;

const Paragraph = styled.p`
  font-family: "Overpass", sans-serif;
  font-size: 1.17rem;
  line-height: 1.4;
  font-weight: 300;
  margin-top: 18px;
  margin-bottom: 114px;
  color: ${(props) => props.theme.GrayishBlue};
`;
const Image = styled.img`
  width: 375px;
  position: absolute;
  top: -183px;
`;

function Section2({ indexSP }) {
  const data = useContext(DataContext);
  return (
    <SectionState>
      <Image src={phones} alt="phones with the Blogr logo" />
      <SubTitle>{data.subTitle[indexSP]}</SubTitle>
      <Paragraph>{data.paragraph[indexSP]}</Paragraph>
    </SectionState>
  );
}

export default Section2;
