import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Title, SubTitle, Button, Paragraph } from "./Components";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  row-gap: 40px;
  padding: 20px 0;
  @media (min-width:768px){
    padding-top: 60px;
  }
  @media (min-width: 1440px) {
    justify-content: space-between;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 5px 0px rgb(0 0 0 / 5%);
  width: 300px;
  padding: 20px;
  max-height: 500px;
`;

const ImageWrap = styled.div`
  height: 150px;
  background-color: lavenderblush;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;

  .image {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    transform: scale(0.98);
  }
`;

const Projects = () => {
  const data = [
    {
      title: "PokedexJs",
      src: "https://github.com/Nikairu/js-pokedex-app",
      demoSrc: "https://nikairu.github.io/pokedex/index.html",
      img: "",
      descr: "Simple pokedex application",
      extra:
        "Within this project, I was responsible for the frontend. It’s written in js. Additionally, I've created the HTML and CSS templates.",
    },
    {
      title: "PokedexJs",
      src: "https://github.com/Nikairu/js-pokedex-app",
      demoSrc: "https://nikairu.github.io/pokedex/index.html",
      img: "",
      descr: "Simple pokedex application",
      extra:
        "Within this project, I was responsible for the frontend. It’s written in js. Additionally, I've created the HTML and CSS templates.",
    },
    {
      title: "PokedexJs",
      src: "https://github.com/Nikairu/js-pokedex-app",
      demoSrc: "https://nikairu.github.io/pokedex/index.html",
      img: "",
      descr: "Simple pokedex application",
      extra:
        "Within this project, I was responsible for the frontend. It’s written in js. Additionally, I've created the HTML and CSS templates.",
    },
    {
      title: "PokedexJs",
      src: "https://github.com/Nikairu/js-pokedex-app",
      demoSrc: "https://nikairu.github.io/pokedex/index.html",
      img: "",
      descr: "Simple pokedex application",
      extra:
        "Within this project, I was responsible for the frontend. It’s written in js. Additionally, I've created the HTML and CSS templates.",
    },
    {
      title: "PokedexJs",
      src: "https://github.com/Nikairu/js-pokedex-app",
      demoSrc: "https://nikairu.github.io/pokedex/index.html",
      img: "",
      descr: "Simple pokedex application",
      extra:
        "Within this project, I was responsible for the frontend. It’s written in js. Additionally, I've created the HTML and CSS templates.",
    },
    {
      title: "PokedexJs",
      src: "https://github.com/Nikairu/js-pokedex-app",
      demoSrc: "https://nikairu.github.io/pokedex/index.html",
      img: "",
      descr: "Simple pokedex application",
      extra:
        "Within this project, I was responsible for the frontend. It’s written in js. Additionally, I've created the HTML and CSS templates.",
    },
  ];
  return (
    <Content>
      {data.map((tile) => (
        <Card key={tile.title}>
          <Title as="a" href={tile.demoSrc} target="_blank" className="--hover">
            {tile.title}
          </Title>
          <ImageWrap href="tile.demoSrc"></ImageWrap>
          <SubTitle className="pt-20">{tile.descr}</SubTitle>
          <Paragraph>{tile.extra}</Paragraph>
          <Button className="mt-auto" href={tile.src} target="_blank">
            GitHub source
          </Button>
        </Card>
      ))}
    </Content>
  );
};

export default Projects;
