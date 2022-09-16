import styled from "styled-components";

const Container = styled.picture`
  @media (min-width: 1170px) {
    height: 100vh;
    grid-row: 2/3;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
  @media (min-width: 1170px) {
    margin: 0;
    object-position: ${(props) =>
      props.nameImage == "editor" ? "5em" : "-21em"};
    width: 100%;
  }
`;

function ImageSection({ nameImage }) {
  return (
    <Container>
      <source
        media="(min-width:1170px)"
        srcSet={`../src/assets/illustration-${nameImage}-desktop.svg`}
      />
      <Image
        nameImage={nameImage}
        src={`../src/assets/illustration-${nameImage}-mobile.svg`}
        alt="phones with the Blogr logo"
      />
    </Container>
  );
}

export default ImageSection;
