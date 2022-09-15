import styled from "styled-components";
const Image = styled.img`
  width: 100%;
  height: 339px;
  margin: 47px 0;
  object-fit: cover;
  border-radius: 3px;
`;
function ImageSection({nameImage}) {
  return (
    <picture>
      <source
        media="(min-width:970px)"
        srcSet={`../src/assets/illustration-${nameImage}-desktop.svg`}
      />
      <Image
        src={`../src/assets/illustration-${nameImage}-mobile.svg`}
        alt="phones with the Blogr logo"
      />
    </picture>
  );
}

export default ImageSection;
