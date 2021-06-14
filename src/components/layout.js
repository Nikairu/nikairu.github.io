import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "normalize.css"

const GlobalStyle = createGlobalStyle`
  body { 
      margin: unset;
   }
`;

const LayoutContainer = styled.div`
  background-color: white;
  box-sizing: border-box;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
`;

export default function Layout({ children, url }) {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Navbar currUrl={url} />
      <Content>{children}</Content>
      <Footer />
    </LayoutContainer>
  );
}
