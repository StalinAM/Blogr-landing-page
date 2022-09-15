import React from "react";
import styled from "styled-components";

const SubTitle = styled.h3`
  margin-bottom: 12px;
  font-family: "Overpass", sans-serif;
  font-size: 1.8rem;
  letter-spacing: -0.4px;
  font-weight: bold;
  color: ${(props) => props.theme.VeryDarkBlue};
`;

const Paragraph = styled.p`
  font-family: "Overpass", sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 300;
  color: ${(props) => props.theme.VeryDarkGrayishBlue};
  margin-top: 10px;
  margin-bottom: 40px;
`;
function ContentSection({ subTitle, paragraph }) {
  return (
    <>
      <SubTitle>{subTitle}</SubTitle>
      <Paragraph>{paragraph}</Paragraph>
    </>
  );
}

export default ContentSection;
