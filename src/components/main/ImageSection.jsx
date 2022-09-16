import styled from "styled-components";
import editorD from "../../assets/illustration-editor-desktop.svg";
import editorM from "../../assets/illustration-editor-mobile.svg";
import laptopD from "../../assets/illustration-laptop-desktop.svg";
import laptopM from "../../assets/illustration-laptop-mobile.svg";

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
        srcSet={nameImage == "editor" ? editorM : laptopM}
      />
      <Image
        nameImage={nameImage}
        src={nameImage == "editor" ? editorM : laptopM}
        alt="phones with the Blogr logo"
      />
    </Container>
  );
}

export default ImageSection;
