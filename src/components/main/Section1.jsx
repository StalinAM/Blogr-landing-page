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
`;

const Title = styled.h2`
  margin-bottom: 12px;
  font-family: "Overpass", sans-serif;
  font-size: 1.9rem;
  letter-spacing: -0.4px;
  font-weight: bold;
  color: ${(props) => props.theme.VeryDarkBlue};
`;

function Section1({ indexTitle, indexSP, nameImage }) {
  const data = useContext(DataContext);
  return (
    <Section>
      {data.title[indexTitle] && <Title>{data.title[indexTitle]}</Title>}
    <ImageSection nameImage={nameImage}/>
      <ContentSection
        subTitle={data.subTitle[indexSP]}
        paragraph={data.paragraph[indexSP]}
      />
      <ContentSection
        subTitle={data.subTitle[indexSP + 1]}
        paragraph={data.paragraph[indexSP + 1]}
      />
    </Section>
  );
}

export default Section1;
