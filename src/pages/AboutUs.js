import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {images} from '../constants/images';

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>СТО "Solver" - Про нас</title>
                <meta name="description"
                      content="Станція технічного обслуговування Солвер в Україні, місто Миколаїв, Херсонське шоссе 115. Ми НЕ ремонтуємо автомобілі!
                      Ми вирішуємо проблеми наших клієнтів з їх автомобілями! © Solver"/>
            </Helmet>
            <Container>
                <Wrapper>
                    <MainBlock>
                        <Title>Про нас</Title>
                        <Quote>
                            <SubTitle><Span>Ми НЕ ремонтуємо автомобілі!</Span><br/> «Ми вирішуємо проблеми наших
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
                            <a href="tel:+380730130014">+38 (073) 013 00 14</a>
                        </PhoneButton>
                    </MainBlock>
                </Wrapper>
            </Container>
        </>
    );
};

export default AboutUs;

const Container = styled.div`
  background: no-repeat url(${images.LogoBg});
  background-size: cover;
`

const Wrapper = styled('div')`
  padding: 160px 300px 60px 300px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const MainBlock = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  align-items: center;
  background: linear-gradient(266deg, rgba(156, 156, 156, 0.40379901960784315) 0%, rgba(156, 156, 156, 0.4990371148459384) 40%, rgba(48, 48, 48, 0.6671043417366946) 75%);
  width: auto;
  height: auto;
  border-radius: 20px;
  padding: 50px 30px;
`

const Quote = styled('div')`
  background-color: rgb(217, 217, 217, 20%);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    height: 70px;
    width: 75px;
    align-self: center;
  }
`

const Title = styled('h1')`
  color: white;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  margin: 0;
`

const SubTitle = styled('h2')`
  font-size: 30px;
  text-align: center;
  margin: 0;
  color: white;
  text-shadow: 0px 5px 6px #000;
`

const Speaker = styled('h3')`
  font-size: 20px;
  text-align: right;
  margin: 0;
  color: white;
  text-shadow: 0px 10px 6px #000;
`

const MainText = styled('p')`
  color: white;
  font-size: 20px;
  padding: 0 100px 40px 100px;
`

const Span = styled('span')`
  border-bottom: 2px white solid;
  transition: 0.5s ease;
  &:hover {
    color: #B9110C;
    border-bottom: 2px #B9110C solid;
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