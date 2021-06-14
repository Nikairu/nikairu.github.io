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

const ImageWrap = styled.a`
  height: 150px; 
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

  &.--has-src{
    &:hover {
      transform: scale(0.97);
    }
  }
`;

const Projects = () => {
  const data = [
    {
      title: "PokedexJs",
      src: "https://github.com/Nikairu/js-pokedex-app",
      demoSrc: "https://nikairu.github.io/pokedex/index.html",
      img: "/PokemonJs.png",
      descr: "Simple pokedex application",
      extra:
        "Within this project, I was responsible for the frontend. It’s written in js. Additionally, I've created the HTML and CSS templates.",
    },
    {
      title: "MeetsApp",
      src: "https://github.com/Nikairu/Meets-App",
      demoSrc: "https://nikairu.github.io/Meets-App/",
      img: "/Meets.png",
      descr: "Calendar Application for WebDev Events",
      extra:
        "Written in React.js, using Recharts for data visualization, Google API for event data and AWS serverless functions for google authentication.",
    },
    {
      title: "Movie_React",
      src: "https://github.com/Nikairu/movie_react",
      demoSrc: "https://elastic-hodgkin-61128b.netlify.app/",
      img: "/MyFlix.png",
      descr: "Awesome IMDB-clone",
      extra:
        "Developed using React, react-router, redux, react-bootstrap.. for front-end. Also developed back end using ExpressJS, and MongoDB.",
    },
    {
      title: "Vue to-do List",
      src: "https://github.com/Nikairu/vue-todo",
      demoSrc: "https://nikairu.github.io/vue-todo/",
      img: "/Todo.png",
      descr: "Simplistic Todo list application",
      extra:
        "Developed using Vue and MATERIAL-UI for styling.",
    },
    {
      title: "Chat-App",
      src: "https://github.com/Nikairu/Chat-App",
      demoSrc: "",
      img: "/Chat-App.png",
      descr: "Chat mobile application",
      extra:
        "Developed using React-Native, expo and gifted-chat for front-end. Used Google firebase for messages/image storage and authentication.",
    },
    {
      title: "Quiz-App",
      src: "https://github.com/Nikairu/Angular-Intro/",
      demoSrc: "https://nikairu.github.io/Angular-Intro/",
      img: "/Quizzes.png",
      descr: "A quiz application for various subjects",
      extra:
        "Developed using Angular.",
    },
  ];
  return (
    <Content>
      {data.map((tile) => {
        return(
        <Card key={tile.title}>
          <Title as="a" href={tile.demoSrc} target="_blank" className="--hover">
            {tile.title}
          </Title>
          <ImageWrap href={tile.demoSrc} target="_blank" className={tile.demoSrc !== "" && "--has-src"}>
            <img
              className="image"
              src={tile.img}
            />
          </ImageWrap>
          <SubTitle className="pt-20">{tile.descr}</SubTitle>
          <Paragraph>{tile.extra}</Paragraph>
          <Button className="mt-auto" href={tile.src} target="_blank">
            GitHub source
          </Button>
        </Card>)}
      )}
    </Content>
  );
};

export default Projects;
