import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavStyle>
      <Link to="/">
        <TitleLogo alt="main title logo" src="/images/nav_logo.png" />
      </Link>
      <NavSearchInput>
        <i class="fas fa-search"></i>
      </NavSearchInput>
      <NavLinkContainer>
        <Link to="/login">로그인</Link>
      </NavLinkContainer>
    </NavStyle>
  );
};

export default Nav;

const NavStyle = styled.nav`
  ${props => props.theme.flexbox('row', 'space-around', 'center')}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  padding: 0 36px;
  border-bottom: 1px solid #e8e8e8;
`;

const TitleLogo = styled.img`
  width: 120px;
  height: 20px;
`;

const NavSearchInput = styled.div`
  width: 80%;
  height: 40px;
  border-radius: 8px;
  background-color: #f4f4f4;
  cursor: text;

  .fas {
    color: #bebebe;
    font-size: 18px;
    margin: 11px 0 0 11px;
  }
`;

const NavLinkContainer = styled.div`
  font-size: 14px;

  a {
    padding: 8px 10px;
  }
`;
