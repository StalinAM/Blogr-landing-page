import styled from "styled-components";
import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";
import { useContext } from "react";
import { DataContext } from "../../context/Data";

const Section = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 30px;
  margin-top: 32px;
  @media (min-width: 1170px) {
    margin: ${(props) => (props.indexTitle ? "0px" : "92px 0px")};
    position: relative;
    display: grid;
    grid-template-rows: 5rem 1fr;
    grid-template-columns: repeat(2, 50%);
    padding: 0px;
    justify-items: center;
    height: 100vh;
  }
`;
const Title = styled.h2`
  font-family: "Overpass", sans-serif;
  font-size: 1.9rem;
  letter-spacing: -0.4px;
  font-weight: bold;
  color: ${(props) => props.theme.VeryDarkBlue};
  @media (min-width: 1170px) {
    font-size: 2.8rem;
    position: inherit;
    top: 130%;
    left: 50%;
    margin: 0;
  }
`;
const Container = styled.article`
  width: 70%;
  @media (min-width: 1170px) {
    grid-column: ${(props) => (props.indexTitle ? "1/2" : "2/3")};
    grid-row: 2/3;
    text-align: start;
  }
`;

function Section1({ indexTitle, indexSP, nameImage }) {
  const data = useContext(DataContext);
  return (
    <Section indexTitle={indexTitle}>
      {data.title[indexTitle] && <Title>{data.title[indexTitle]}</Title>}
      <ImageSection nameImage={nameImage} />
      <Container indexTitle={indexTitle}>
        <ContentSection
          subTitle={data.subTitle[indexSP]}
          paragraph={data.paragraph[indexSP]}
        />
        <ContentSection
          subTitle={data.subTitle[indexSP + 1]}
          paragraph={data.paragraph[indexSP + 1]}
        />
      </Container>
    </Section>
  );
}

export default Section1;
