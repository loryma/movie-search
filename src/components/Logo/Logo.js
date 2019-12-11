import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
  width: 100%;

  text-align: center;
`;

const HomeLink = styled(Link)`
  font-size: 1em;
  text-transform: uppercase;
  color: white;
  line-height: 2em;
  font-weight: bold;
  background-color: black;
  display: block;
  text-decoration: none;

  @media (min-width: 540px) {
    font-size: 2.5em;
  }
`;

const Logo = ({ children }) => {
  return (
    <LogoContainer>
      <HomeLink to="/">{children}</HomeLink>
    </LogoContainer>
  );
};

export default Logo;
