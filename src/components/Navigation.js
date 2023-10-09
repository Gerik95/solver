import React from 'react';
import { images } from '../constants/images';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import UmfButton from './buttons/UMFButton';
import GeoButton from './buttons/GeoButton';
import BurgerMenu from '../assets/images/icons/BurgerMenu';

import cn from "classnames";
import { Container } from "../styled/main";
import { theme } from "../constants/theme";
import { useDispatch, useSelector } from "react-redux";
import { handleNavActive } from "../store/slices/navSlice";
import { ButtonMenu } from "../styled/button";


const Navigation = ({ scrollTop }) => {
  const { navActive } = useSelector(state => state.navigation);
  const dispatch = useDispatch();
  const MenuIcon = () => {
    return (
      <ButtonMenu onClick={() => dispatch(handleNavActive(true))}>
        <BurgerMenu/>
      </ButtonMenu>
    );
  }

  return (
    <NavBar scrollTop={scrollTop}>
      <Container>
        <NavBarLinks className={cn("")}>
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
        <Info>
          <UmfButton/>
          <GeoButton/>
        </Info>
        <MenuIconWrapper>
          <MenuIcon/>
        </MenuIconWrapper>
      </Container>
      {/*{isMobile && navActive && <NavMobile/>}*/}
    </NavBar>
  );
};

export default Navigation;

const NavBar = styled.div`
  backdrop-filter: blur(5px);
  background: ${(props => props.scrollTop > 100 ? 'linear-gradient(180deg, rgba(156,156,156,0.6530987394957983) 0%, rgba(156,156,156,0.4514180672268907) 50%, rgba(156,156,156,0.5242471988795518) 100%)' : 'linear-gradient(266deg, rgba(156,156,156,0.40379901960784315) 0%, rgba(156,156,156,0.4990371148459384) 40%, rgba(48,48,48,0.6671043417366946) 75%)')};
  height: 100px;

  @media (max-width: ${theme.breakpoint.lg}) {
    height: 60px;
  }
`

const Info = styled.div`
  grid-column: 9 /13;
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;

  @media (max-width: ${theme.breakpoint.lg}) {
    display: none;
  }
`

const NavBarLinks = styled('div')`
  grid-column: 1 / 6;
  display: flex;
  column-gap: 15px;
  align-items: center;

  @media (max-width: ${theme.breakpoint.lg}) {
    display: none;
  }
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

  @media (max-width: ${theme.breakpoint.lg}) {
    display: none;
  }
`

const LogoNav = styled(Link)`

`

const MenuIconWrapper = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoint.lg}) {
    display: block;
  }
`
