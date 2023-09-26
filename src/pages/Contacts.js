import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {images} from '../constants/images';
import LogoBg from '../assets/images/LeftLogoBg.png';

const Contacts = () => {
    return (
        <>
            <Helmet>
                <title>СТО "Solver" - Контакти</title>
                <meta name="description"
                      content="Станція технічного обслуговування Солвер Миколаїв, місто Миколаїв, Херсонське шоссе 115, СТО Николаев, СТО Херсонське шоссе, Автосервіс Миколаїв, СТО Інгульский район, Solver, HM Service"/>
            </Helmet>
            <Container>
                <Wrapper>
                    <ContactInfo>
                        <CardSolver>
                           <LeftSection>
                               <Title>Зв’яжіться з нами!</Title>
                               <H2Info>
                                   Є питання або хочете повідомити проблему - ми завжди раді допомогти! <br/>
                                   Підписуйтесь та стежте за нашими соц.мережами! <br/>
                                   Робіть свій внесок в перемогу!
                               </H2Info>
                           </LeftSection>
                            <RightSection>
                                <Social>
                                    <TGIcon target='_blank' href="https://t.me/hmservice1"><img src={images.TGContact} alt="Telegram"/></TGIcon>
                                    <InstIcon target='_blank' href="https://instagram.com/hm_service_niko?igshid=MWZjMTM2ODFkZg=="><img src={images.instaContsct} alt="Instagram"/></InstIcon>
                                </Social>
                                <PhoneButton>
                                    <img src={images.phoneIcon} alt="Phone"/>
                                    <a href="tel:+380730130014">+38 (073) 013 00 14</a>
                                </PhoneButton>
                                <UMFButton target='_blank' href='https://www.google.com/'>
                                    <img src={images.UMFLogo} alt="UMF logo"/>
                                    Підтримати ЗСУ
                                </UMFButton>
                            </RightSection>
                        </CardSolver>
                    </ContactInfo>
                    <MapSection>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.6775549164586!2d32.065680176647575!3d46.948376133198664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5cb050709e1b3%3A0xbd72b45a12aa3ce0!2z0KXQtdGA0YHQvtC90YHQutC-0LUg0YguLCAxMTUsINCd0LjQutC-0LvQsNC10LIsINCd0LjQutC-0LvQsNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDU0MDAw!5e0!3m2!1sru!2sru!4v1695027784263!5m2!1sru!2sru"
                            width="100%" height="550px" style={{border:0, borderRadius:'20px'}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </MapSection>
                </Wrapper>
            </Container>

        </>
    );
};

export default Contacts;

const ContactInfo = styled('div')`
  
`

const MapSection = styled('div')`
  display: flex;
  align-content: center;
`

const Container = styled.div`
  background: no-repeat url(${images.LogoBg});
  background-size: cover;
`

const Wrapper = styled('div')`
  padding: 160px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const CardSolver = styled('div') `
  display: flex;
  justify-content: space-evenly;
  //gap: 100px;
  align-items: center;
  background: linear-gradient(180deg, rgba(0,91,187,0.3533788515406162) 0%, rgba(255,213,0,0.3533788515406162) 100%);
  width: auto;
  height: auto;
  border-radius: 20px;
  padding: 50px 30px;
`

const LeftSection = styled('div')`

`

const Title = styled.h1 `
  margin: 0;
  font-size: 48px;
  color: #ffff;
  text-align: left;
`

const H2Info = styled('h2') `
  padding-top: 30px;
  margin: 0;
  font-size: 16px;
  color: #BFBFBF;
  text-align: left;
`

const RightSection = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

const Social = styled('div')`
  display: flex;
  gap: 30px;
`

const UMFButton = styled('a') `
  margin-left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 17px;
  border-radius: 10px;
  border: 1px solid #ffff;
  padding: 8px 15px;
  font-size: 14px;
  color: #ffff;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #B9110C;
    border: 1px solid #B9110C;
  }
`

const PhoneButton = styled('div')`
  display: flex;
  gap: 10px;
  color: #EBEBEB;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`

const TGIcon = styled('a') `
  color: #464C51;
  transition: 0.5s ease;
  &:hover {
    transform: rotate(360deg);
  }
`
const InstIcon = styled('a') `
  color: #464C51;
  transition: 0.5s ease;
  &:hover {
    transform: rotate(360deg);
  }
`