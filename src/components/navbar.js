import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// import PropTypes from 'prop-types';

//styles
const Nav = styled.nav`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  min-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: calc(100% - 40px);
  margin: 0 auto;
  max-width: 1460px;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #569358;
  font-family: "Barlow";
  font-weight: 600;
  font-size: 46px;
  letter-spacing: 0.01em;
  margin: 0;
  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #569358;
  }
`;

const Menu = styled.div`
  padding-top: 10px;
  min-height: 30px;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const NavLink = styled(Link)`
  /* letter-spacing: 0.02em; */
  display: block;
  text-decoration: none;
  font-family: "Barlow";
  color: black;
  font-size: 22px;
  position: relative;
  width: fit-content;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 0px;
    transition: 0.2s;
    background-color: black;
    @media (min-width: 768px) {
      bottom: 10px;
    }
  }
  &:hover {
    &:after {
      width: 100%;
      right: 0;
    }
  }

  &.--active {
    &:after {
      width: 100%;
    }
  }
`;

// markup
const Navbar = ({ currUrl }) => {
  // const myregexp = /.*\/(.*?)$/;
  // // const url = myregexp.exec(currUrl)[1];
  // let url = currUrl.split("/").pop();
  // console.log(url)
  return (
    <Nav>
      <HomeLink to="/">Diogo Oliveira</HomeLink>
      <Menu>
        <NavLink activeClassName="--active" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="--active" to="/projects">
          Projects
        </NavLink>
        <NavLink activeClassName="--active" to="/contacts">
          Contacts
        </NavLink>
      </Menu>
    </Nav>
  );
};

// Navbar.propTypes = {
//   currUrl: PropTypes.string,
// }
// Navbar.defaultProps = {
//   currUrl: "",
// }

export default Navbar;
