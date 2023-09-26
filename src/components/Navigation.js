import React, { useState } from 'react';
import { images } from '../constants/images';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { MobileView, isMobile } from 'react-device-detect';

import UmfButton from './buttons/UMFButton';
import GeoButton from './buttons/GeoButton';
import BurgerMenu from '../assets/images/icons/BurgerMenu';
import Exit from '../assets/images/icons/Exit';

import cn from "classnames";
import { Container } from "../styled/main";


const Navigation = ({ scrollTop }) => {
  const [navActive, setNavActive] = useState(false);

  const toggleHandler = () => setNavActive(prev => !prev);
  const menuIcon = navActive ?
    (<Exit/>) : (<BurgerMenu/>)

  return (
    <NavBar scrollTop={scrollTop} className={cn("nav-bar", {
      mobile: isMobile,
      active: navActive
    })}>
      <Container>
        <NavBarLinks className={cn("", {
          mobile: isMobile,
          active: navActive
        })}>
          <NavLinkCustom to='/'>
            Головна
          </NavLinkCustom>
          <NavLinkCustom to='about-us'>
            Про нас
          </NavLinkCustom>
          <NavLinkCustom to='vacancies'>
            Вакансії
          </NavLinkCustom>
          <NavLinkCustom to='contacts'>
            Контакти
          </NavLinkCustom>
          {/*<NavLinkCustom to='cooperation'>*/}
          {/*    Співробітництво*/}
          {/*</NavLinkCustom>*/}
        </NavBarLinks>
        <LogoWrapper>
          <LogoNav to='/'>
            <img src={images.navLogo} alt="logo"/>
          </LogoNav>
        </LogoWrapper>
        <UmfButton/>
        <GeoButton/>
      </Container>
      {/*<MenuButton onClick={toggleHandler}>{menuIcon}</MenuButton>*/}
      {/*<Wrapper>*/}
      {/*  <NavBarLinks className={cn("", {*/}
      {/*    mobile: isMobile,*/}
      {/*    active: navActive*/}
      {/*  })}>*/}
      {/*    <NavLinkCustom to='/'>*/}
      {/*      Головна*/}
      {/*    </NavLinkCustom>*/}
      {/*    <NavLinkCustom to='about-us'>*/}
      {/*      Про нас*/}
      {/*    </NavLinkCustom>*/}
      {/*    <NavLinkCustom to='vacancies'>*/}
      {/*      Вакансії*/}
      {/*    </NavLinkCustom>*/}
      {/*    <NavLinkCustom to='contacts'>*/}
      {/*      Контакти*/}
      {/*    </NavLinkCustom>*/}
      {/*    /!*<NavLinkCustom to='cooperation'>*!/*/}
      {/*    /!*    Співробітництво*!/*/}
      {/*    /!*</NavLinkCustom>*!/*/}

      {/*  </NavBarLinks>*/}
      {/*  <LogoNav to='/'>*/}
      {/*    <img src={images.navLogo} alt="logo"/>*/}
      {/*  </LogoNav>*/}
      {/*  <UmfButton/>*/}
      {/*  <GeoButton/>*/}
      {/*</Wrapper>*/}
    </NavBar>
  );
};

export default Navigation;

const NavBar = styled.div`
  backdrop-filter: blur(5px);
  background: ${(props => props.scrollTop > 100 ? 'linear-gradient(180deg, rgba(156,156,156,0.6530987394957983) 0%, rgba(156,156,156,0.4514180672268907) 50%, rgba(156,156,156,0.5242471988795518) 100%)' : 'linear-gradient(266deg, rgba(156,156,156,0.40379901960784315) 0%, rgba(156,156,156,0.4990371148459384) 40%, rgba(48,48,48,0.6671043417366946) 75%)')};
  height: 100px;
  // position: fixed;
  // left: 0;
  // right: 0;
  // z-index: 1000;
  
  @media (max-width: 500px) {
    z-index: 9999;
    position: fixed;
    background: red;
    width: 100%;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
  }

  //&.mobile {
  //  position: fixed;
  //  height: 100vh;
  //  width: 100%;
  //  background-color: #000;
  //  z-index: 1001;
  //  flex-direction: column;
  //  justify-content: center;
  //  left: -100%;
  //  transition: left .5s;
  //}
  //
  //&.mobile.active {
  //  left: 0;
  //}
`

const MenuButton = styled('button')`
  top: 15px;
`

const Wrapper = styled('div')`
  //height: 100px;
  //padding: 0 30px;
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
`
const NavBarLinks = styled('div')`
  grid-column: 1 / 6;
  display: flex;
  column-gap: 15px;
  align-items: center;
  @media (max-width: 500px) {
    //flex-direction: column;
    //row-gap: 10px;
    //align-items: center;
  }

  //&.mobile {
  //  flex-direction: column;
  //  row-gap: 10px;
  //  align-items: center;
  //}
`
const NavLinkCustom = styled(NavLink)`
  font-weight: 400;
  color: #ffff;
  cursor: pointer;
  position: relative;
  display: block;
  padding: 5px 0px;
  text-decoration: none;
  transition: .5s;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid #B9110C;
    border-bottom: 1px solid #B9110C;
    transform: scaleY(2);
    opacity: 0;
    transition: .5s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    opacity: 0;
    transition: .5s;
    z-index: -1;
  }

  &:hover {
    transition: .5s;
    color: #B9110C;

    &:before {
      transform: scaleY(1);
      opacity: 1;
    }

    &.active {
      color: #B9110C;
    }
  }
`
const LogoWrapper = styled.div`
  grid-column: 6 / 8;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoNav = styled(Link)`
  //position: absolute;
  //left: 50%;
  //margin-left: -25px;

`