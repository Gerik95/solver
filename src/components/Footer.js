import React from 'react';
import styled from 'styled-components';
import {images} from '../constants/images';
import FacebookIcon from '../assets/images/svg/FacebookIcon';
import InstaIcon from '../assets/images/svg/InstaIcon';
import TgIcon from '../assets/images/svg/TGIcon';

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <CardSolverSmall>
                    <CardHeading>Solver</CardHeading>
                    <img src={images.footerLogo} alt="footer logo"/>
                    <CardWorkDay>Без вихідних</CardWorkDay>
                    <CardTime>09:00 - 20:00</CardTime>
                </CardSolverSmall>
                <FooterInfo>
                    <FooterText>Всі роботи проводяться спеціалізованим обладнанням.</FooterText>
                    <FooterText>На всі роботи надаються акти дефектування, наряди-замовлення та акти виконаних робіт.</FooterText>
                    <FooterText>© 2023 ТОВ «Солвер Т» Усі права захищені.</FooterText>
                </FooterInfo>
                <FooterIcons>
                    <FooterLinkTG target='_blank' href="https://t.me/hmservice1"><TgIcon/></FooterLinkTG>
                    <FooterLinkIN target='_blank' href="https://instagram.com/hm_service_niko?igshid=MWZjMTM2ODFkZg=="><InstaIcon/></FooterLinkIN>
                    {/*<FooterLinkFB target='_blank' href=""><FacebookIcon/></FooterLinkFB>*/}
                    {/*<FooterLinkUMF target='_blank' href=""><img src={images.footerUMF} alt="Ukraine Military Force"/></FooterLinkUMF>*/}
                </FooterIcons>
            </Wrapper>
        </Container>
    );
};

export default Footer;

const Container = styled('div') `
  height: 300px;
  background-image: url(${images.footerBg});
`

const Wrapper = styled('div') `
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
`

const CardSolverSmall = styled('div') `
  display: grid;
  justify-items: center;
`
const CardHeading = styled('p') `
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
  color: #121619;
  font-size: 36px;
  font-family: 'Michroma', sans-serif;
  text-shadow: 0px 13px 6px;
  opacity: 50%;
`

const CardWorkDay = styled('p') `
  padding: 0;
  margin: 0;
  margin-top: 15px;
  font-size: 24px;
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
`

const FooterText = styled('p') `
  font-weight: 700;
  text-align: center;
  color: #464C51;
`

const FooterIcons = styled('div') `
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  column-gap: 30px;
  align-content: center;
`
const FooterLinkTG = styled('a') `
  color: #464C51;
  transition: 0.5s ease;
  &:hover {
    color: #229ED9;
    transform: scale(1.1, 1.1);
  }
`
const FooterLinkIN = styled('a') `
  color: #464C51;
  transition: 0.5s ease;
  &:hover {
    color: #E1306C;
    transform: scale(1.1, 1.1);
  }
`
const FooterLinkFB = styled('a') `
  color: #464C51;
  transition: 0.5s ease;
  &:hover {
    color: #3b5998;
    transform: scale(1.1, 1.1);
  }
`
const FooterLinkUMF = styled('a') `
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`