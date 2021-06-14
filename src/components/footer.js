import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import GithubLogo from "../assets/images/github_icon.svg";
import TwitterLogo from "../assets/images/twitter_icon.svg";
import LinkedinLogo from "../assets/images/linkedin_icon.svg";

//styles
const FooterBar = styled.footer`
  position: fixed;
  right: 20px;
  bottom: 20px;
`;

const Socials = styled.div`
  max-height: 30px;
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

const SocialLink = styled.a`
  width: 30px;
  height: 30px;
  transition: 0.2s;

  &:hover{
    transform: scale(0.9);
  }
`;

// markup
const Footer = () => {
  return (
    <FooterBar>
      <Socials className="social-media">
        <SocialLink href="https://github.com/Nikairu">
          <GithubLogo />
        </SocialLink>

        <SocialLink href="#">
          <TwitterLogo />
        </SocialLink>

        <SocialLink href="https://www.linkedin.com/in/diogo-oliveira-3036b7146/">
          <LinkedinLogo/>
        </SocialLink>
      </Socials>
    </FooterBar>
  );
};

export default Footer;
