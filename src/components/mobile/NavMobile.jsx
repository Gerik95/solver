import React from 'react';
import styled from "styled-components";
import { handleNavActive } from "../../store/slices/navSlice";
import { ButtonMenu } from "../../styled/button";
import { useDispatch } from "react-redux";
import Exit from "../../assets/images/icons/Exit";
import cn from 'classnames';
import {NavLink} from 'react-router-dom';
import UmfButton from '../buttons/UMFButton';
import GeoButton from '../buttons/GeoButton';
import {images} from '../../constants/images';
import TgIcon from '../../assets/images/svg/TGIcon';
import InstaIcon from '../../assets/images/svg/InstaIcon';

const NavMobile = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <ButtonMenu onClick={() => dispatch(handleNavActive(false))}>
        <Exit/>
      </ButtonMenu>
        <BtnWrapper>
            <UmfButton/>
            <GeoButton/>
        </BtnWrapper>
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

        <Footer>
            <CardSolverSmall>
                <CardHeading>Solver</CardHeading>
                <img src={images.footerLogo} alt="footer logo"/>
                <CardWorkDay>Без вихідних</CardWorkDay>
                <CardTime>09:00 - 20:00</CardTime>
            </CardSolverSmall>
            <FooterIcons>
                <TGIcon target='_blank' href="https://t.me/hmservice1"><img src={images.TGContact} alt="Telegram"/></TGIcon>
                <InstIcon target='_blank' href="https://instagram.com/hm_service_niko?igshid=MWZjMTM2ODFkZg=="><img src={images.instaContsct} alt="Instagram"/></InstIcon>
                {/*<FooterLinkFB target='_blank' href=""><FacebookIcon/></FooterLinkFB>*/}
                {/*<FooterLinkUMF target='_blank' href=""><img src={images.footerUMF} alt="Ukraine Military Force"/></FooterLinkUMF>*/}
            </FooterIcons>
            <FooterInfo>
                <FooterText>Всі роботи проводяться спеціалізованим обладнанням.</FooterText>
                <FooterText>На всі роботи надаються акти дефектування, наряди-замовлення та акти виконаних робіт.</FooterText>
                <FooterText>© 2023 ТОВ «Солвер Т» Усі права захищені.</FooterText>
            </FooterInfo>

        </Footer>
    </Container>
  );
};

export default NavMobile;

const Container = styled.div`
  position: fixed;
  padding: 15px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  background: #9C9C9C;

`

const NavBarLinks = styled('div')`
  display: flex;
  flex-direction: column;
  column-gap: 15px;
  align-items: center;
  justify-self: center;
  font-size: 21px;
`

const NavLinkCustom = styled(NavLink)`
  font-weight: 400;
  color: #ffff;
  cursor: pointer;
  position: relative;
  display: block;
  padding: 5px 0px;
  text-decoration: none;
  `

const BtnWrapper = styled('div')`
  display: flex;
  //flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px 0 20px 0;
`

const Footer = styled('div')`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  flex-direction: column;
  gap: 20px;
`

const CardSolverSmall = styled('div') `
  padding: 20px 0 20px 0;
  grid-column: 1 / 7;
  display: grid;
  justify-items: center;
  img {
    transform: scale(0.8);
  }
`
const CardHeading = styled('p') `
  padding: 0;
  margin: 0;
  color: #121619;
  font-size: 24px;
  font-family: 'Michroma', sans-serif;
  text-shadow: 0px 13px 6px;
  opacity: 50%;
`

const CardWorkDay = styled('p') `
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: #121619;
  text-shadow: 0px 13px 6px;
  opacity: 50%;
`

const CardTime = styled('p') `
  padding: 0;
  margin: 0;
  color: #B9110C;
  font-family: 'Michroma', sans-serif;
  text-shadow: 0px 13px 6px;
  opacity: 50%;
`

const FooterInfo = styled('div') `
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  grid-column: 1 / 13;
`

const FooterText = styled('p') `
  font-weight: 700;
  text-align: center;
  color: #464C51;
  margin: 5px;
`

const FooterIcons = styled('div') `
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  column-gap: 10px;
  align-items: end;
  justify-content: center;
  grid-column: 7 / 13;
`
const TGIcon = styled('a') `
  color: #229ED9;
`
const InstIcon = styled('a') `
  color: #E1306C;
`