import { Link } from "gatsby";
import styled from "styled-components";
import React, { useState } from "react";
import "normalize.css";
import Footer from "../components/footer";

const Main = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Intro = styled.div`
  position: absolute;
  bottom: 250px;
  left: 2.5%;
`;

const Name = styled.span`
  font-family: "Barlow";
  font-weight: 600;
  font-size: 46px;
  line-height: 1.1;
  letter-spacing: 0.01em;
  margin: 0;
  @media(min-width:768px){
    font-size: 58px;
  }
`;

const WhoAmI = styled.p`
  padding-left: 5px;
  font-family: "Barlow";
  font-weight: 200;
  font-size: 18px;
  letter-spacing: 0.01em;
`;

const MenuContainer = styled.div`
  width: 100%;
  height:24vh;
  margin: 0 auto;
  margin-right: 0;
  background-color: #569358;
  display: flex;
  @media(min-width:768px){
    flex: 1;
    width: 50%;
  }
  
`;

const Menu = styled.div`
  padding: 0 12%;;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 15px;


  @media(min-width:768px){
    gap: 30px;
  }
  
`;

const MenuLink = styled(Link)`
  letter-spacing: 0.02em;
  font-size: 24px;
  display: block;
  text-decoration: none;
  font-family: "Barlow";
  color: white;
  position: relative;
  width: fit-content;
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 3px;
    width: 0px;
    transition: 0.2s;
    background-color: white;
  }
  &:hover {
    &:after {
      width: 100%;
      right: 0;
    }
  }

  @media(min-width:768px){
    letter-spacing: 0.02em;
    font-size: 36px;
  }

`;

// markup
const IndexPage = () => {

  return (
    <Main>
      <Intro>
        <div>
          <Name>Diogo Oliveira</Name>
          <WhoAmI> is a web developer located in Poland</WhoAmI>
        </div>
      </Intro>
      <MenuContainer>
        <Menu>
          <MenuLink to="/about">About me</MenuLink>
          <MenuLink to="/projects">Projects</MenuLink>
          <MenuLink to="/contacts">Contacts</MenuLink>
        </Menu>
      </MenuContainer>
      <Footer/>
    </Main>
  );
};

export default IndexPage;
