import React from 'react';
import styled from "styled-components";
import { handleNavActive } from "../../store/slices/navSlice";
import { ButtonMenu } from "../../styled/button";
import { useDispatch } from "react-redux";
import Exit from "../../assets/images/icons/Exit";
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import UmfButton from '../buttons/UMFButton';
import GeoButton from '../buttons/GeoButton';
import { images } from '../../constants/images';
import TgIcon from '../../assets/images/svg/TGIcon';
import InstaIcon from '../../assets/images/svg/InstaIcon';
import { columnCenter } from "../../styled/main";
import { theme } from "../../constants/theme";

const NavMobile = () => {
  const dispatch = useDispatch();
  const closeNavMenu = () => dispatch(handleNavActive(false));
  return (
    <Container>
      <ButtonMenu onClick={closeNavMenu}>
        <Exit/>
      </ButtonMenu>
      <Content>
      <NavBarLinks className={cn("")}>
        <Logo src={images.footerLogo} alt="footer logo"/>
        <NavLinkCustom onClick={closeNavMenu} to='/'>
          Головна
        </NavLinkCustom>
        <NavLinkCustom onClick={closeNavMenu} to='about-us'>
          Про нас
        </NavLinkCustom>
        <NavLinkCustom onClick={closeNavMenu} to='vacancies'>
          Вакансії
        </NavLinkCustom>
        <NavLinkCustom onClick={closeNavMenu} to='contacts'>
          Контакти
        </NavLinkCustom>
        {/*<NavLinkCustom to='cooperation'>*/}
        {/*    Співробітництво*/}
        {/*</NavLinkCustom>*/}
      </NavBarLinks>
        <GeoButton color={theme.color.black}/>
      </Content>
    </Container>
  );
};

export default NavMobile;

const Content = styled.div`
  ${columnCenter};
  height: 100%;
  margin-bottom: 50px;
`

const Logo = styled.img`
  margin-bottom: 50px;
`

const Container = styled.div`
  position: fixed; 
  padding: 15px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  background: ${theme.gradient.greyWhiteVertical};
`

const NavBarLinks = styled('div')`
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  column-gap: 15px;
  align-items: center;
  justify-self: center;
  font-size: 21px;
`

const NavLinkCustom = styled(NavLink)`
  font-weight: 400;
  color: ${theme.color.black};
  cursor: pointer;
  position: relative;
  display: block;
  padding: 5px 0px;
  text-decoration: none;
`