import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Title, SubTitle, ListItem } from "./Components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding: 0px 20px;
  margin: auto;
  justify-content: space-between;
  position: relative;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &:after {
    content: "";
    width: 70%;
    height: 1px;
    position: absolute;
    display:none;
    left: 50%;
    top: 50%;
    background-color: black;
    transform: translate(-50%, -50%);
    @media (min-width: 768px) {
        display:block;
      width: 1px;
      height: 70%;
    }
  }
`;

const PhotoWrap = styled.div`
  width: 100%;
  max-width: 80%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  transform: translate(0,-50px);

  @media (min-width: 768px) {
    max-width: 40%;
    transform: translate(0,0);
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 100%;
  }

  
 
  .profile-image {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  @media (min-width: 768px) {
    max-width: 40%;
  }
`;

const About = () => {
  return (
    <Content>
      <PhotoWrap>
        <StaticImage
          className="profile-image"
          src="../assets/images/pfp1.jpg"
          alt="profile picture"
        />
      </PhotoWrap>
      <TextContent>
        <Title>Hello,</Title>
        <SubTitle>
          I'm an RPA developer, who always had passion for web-development.
        </SubTitle>
        <SubTitle>
          So now I'm finally making my dreams come true. Check out my stack:
        </SubTitle>
        <ListItem>
          <strong>M</strong>ongoDB, <strong>E</strong>xpressJs,{" "}
          <strong>R</strong>eact, <strong>N</strong>odeJs
        </ListItem>
        <ListItem>React Native</ListItem>
        <ListItem>Vue, Angular</ListItem>
        <ListItem>Jest, Cucumber</ListItem>
      </TextContent>
    </Content>
  );
};

export default About;
