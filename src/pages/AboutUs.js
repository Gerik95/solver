import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { images } from '../constants/images';
import { Container } from "../styled/main";
import { theme } from "../constants/theme";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Автосервіс "Solver" - Про нас</title>
        <meta name="description"
              content="Станція технічного обслуговування Солвер в Україні, місто Миколаїв, Херсонське шоссе 115. Ми НЕ ремонтуємо автомобілі!
                      Ми вирішуємо проблеми наших клієнтів з їх автомобілями! © Solver"/>
      </Helmet>
      <ContainerAboutUs>
        <MainBlock>
          <Title>Про нас</Title>
          <Quote>
            <SubTitle>
              <p><Span>Ми НЕ ремонтуємо автомобілі!</Span></p>
              «Ми вирішуємо проблеми наших
              клієнтів з їх автомобілями!»</SubTitle>
            <Speaker>© Solver</Speaker>
          </Quote>
          <MainText>
            Маючи доволі багатий досвід та тернистий шлях позитивних та негативних спроб, всі
            співробітники
            <Span> завжди</Span> знаходяться в процесі навчання як завдяки теоретичним завданням, так й
            завдяки
            проблемам
            наших клієнтів. Якщо Ви вже втомилися обслуговуватися в тих, хто вміє тільки міняти основні
            розхідники та мають непрозору систему ціноутворення «зі стелі» - <Span>ми Вам
            потрібні</Span> більше, ніж
            Вам
            здається. <Span>Гарантією</Span> виконаної роботи являються документи, які обовʼязково
            видаються кожного
            разу, як автомобіль потрапляє до автосервісу.
            Завдяки комплексному підходу, автомобілі наших клієнтів мають коефіцієнт повернення з тією ж
            проблемою сягає <Span>не більше 10%</Span>, що за мірками навіть офіційних дилерських
            автосервісів,
            вважається
            надзвичайним результатом.
          </MainText>
          <PhoneButton>
            <img src={images.phoneIcon} alt="Phone"/>
            <a target='_blank' href="https://t.me/hmservice1">+38 (073) 013 00 14</a>
          </PhoneButton>
        </MainBlock>
      </ContainerAboutUs>
    </>
  );
};

export default AboutUs;

const ContainerAboutUs = styled.div`
  background: no-repeat url(${images.LogoBg});
  background-size: cover;
  padding: 160px ;

  @media (max-width: ${theme.breakpoint.lg}) {
    padding: 50px;
  }

  @media (max-width: ${theme.breakpoint.xsm}) {
    padding: 20px;
  }
`

const MainBlock = styled(Container)`
  max-width: clamp(18.75rem, 85.938vw + 1.563rem, 62.5rem);
  background: linear-gradient(266deg, rgba(156, 156, 156, 0.40379901960784315) 0%, rgba(156, 156, 156, 0.4990371148459384) 40%, rgba(48, 48, 48, 0.6671043417366946) 75%);
  border-radius: 20px;
  padding: 50px 30px;
  box-sizing: border-box;
`

const Quote = styled('div')`
  grid-column: 1 / 13;
  background-color: rgb(217, 217, 217, 20%);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;

  img {
    height: 70px;
    width: 75px;
    align-self: center;
  }

  @media (max-width: ${theme.breakpoint.xsm}) {
    margin-bottom: 20px;
    padding: 10px;
    
    span {
      line-height: 26px;
    }
  }
`

const Title = styled('h1')`
  grid-column: 1 / 13;
  color: white;
  font-weight: 700;
  font-size: ${theme.fontSize.font_48_30};
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: ${theme.breakpoint.xsm}) {
    margin-bottom: 20px;
  }
`

const SubTitle = styled('h2')`
  grid-column: 1 / 13;
  font-size: ${theme.fontSize.font_30_20};
  text-align: center;
  margin: 0;
  color: ${theme.color.white};
  text-shadow: 0px 5px 6px ${theme.color.black};

  @media (max-width: ${theme.breakpoint.xsm}) {
    font-size: 22px;
  }
`

const Speaker = styled('h3')`
  font-size: ${theme.fontSize.font_20_16};
  text-align: right;
  margin: 0;
  color: ${theme.color.white};
  text-shadow: 0px 10px 6px ${theme.color.black};
`

const MainText = styled('p')`
  grid-column: 2 / 12;
  color: ${theme.color.white};
  font-size: ${theme.fontSize.font_20_16};

  @media (max-width: ${theme.breakpoint.xsm}) {
    grid-column: 1 / 13;
  }
`

const Span = styled('span')`
  border-bottom: 2px white solid;
  transition: 0.5s ease;
  cursor: text;
  margin-bottom: 5px;

  &:hover {
    color: ${theme.color.neonRed};
    border-bottom: 2px #B9110C solid;
  }
`

const PhoneButton = styled('div')`
  grid-column: 1 / 13;
  display: flex;
  gap: 10px;
  color: #EBEBEB;
  font-size: ${theme.fontSize.font_30_20};
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s ease;
  justify-content: flex-end;
  margin-top: 20px;

  &:hover {
    color: ${theme.color.lightGrey};
    text-shadow: 0px 5px 6px ${theme.color.black};
  }

  @media (max-width: ${theme.breakpoint.xsm}) {
    font-size: 20px;
  }
`