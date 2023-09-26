import React from 'react';
import styled from 'styled-components';
import {images} from '../constants/images';

const InfoBlockRight = () => {
    return (
        <Container>
            <Wrapper>
                <HeadingInfo>Ремонт ДВЗ</HeadingInfo>
                <H2Info>Здійснюємо діагностику та ремонт дизельних та бензинових двигунів.</H2Info>
                <Section>
                    <TextBlock>
                        <ListHead>
                            Кожен двигун будь-якого автомобіля з часом починає проявляти
                            такі симптоми:
                            <FirstLi>Затруднений запуск</FirstLi>
                            <List>Детонація при глушінні</List>
                            <List>Витрата масла</List>
                            <List>Течі масла по двигуну</List>
                            <List>Підвищена димність</List>
                            <List>Витік охолоджуючої рідини</List>
                            <List>Сторонні звуки з підкапотного простору</List>
                            <LastLi>та багато інших.</LastLi>
                        </ListHead>
                        <ListHead>
                            Перш ніж дати рекомендацію щодо ремонту двигуна,
                            ми проводимо максимально розгорнуту діагностику, до якої входить:
                            <FirstLi>Кілька видів комп'ютерної діагностики</FirstLi>
                            <List>Пошук витоків по всмоктуючий тракт димогенератором</List>
                            <List>Діагностика паливної системи</List>
                            <List>Замір компресії</List>
                            <List>Опресування системи охолодження</List>
                            <List>Ендоскопія</List>
                            <List>Виявлення відпрацьованих газів у системі охолодження</List>
                            <LastLi>та інші процедури.</LastLi>
                        </ListHead>
                    </TextBlock>
                    <ImageBlock src={images.engineImg} alt=""/>
                </Section>
            </Wrapper>
        </Container>
    );
};

export default InfoBlockRight;

const Container = styled('div') `
  background-image: url(${images.leftLogoBg});
  height: 1000px;
`

const Wrapper = styled('div') `
  padding: 120px 35px;
`

const HeadingInfo = styled('h1') `
  padding: 0;
  margin: 0;
  font-size: 48px;
  color: #ffff;
  text-align: center;
`

const H2Info = styled('h2') `
  padding: 25px 0 60px 0;
  margin: 0;
  font-size: 16px;
  color: #BFBFBF;
  text-align: center;
`

const Section = styled('div') `
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  column-gap: 100px;
`

const TextBlock = styled('div') `
  max-width: 650px;
`

const ListHead = styled('ul') `
  padding: 20px 0;
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  color: #BFBFBF;
`

const FirstLi = styled('li') `
  padding-top: 20px;
  margin-left: 50px;
`

const List = styled('li') `
  margin-left: 50px;
`

const LastLi = styled('li') `
  list-style: none;
  margin-left: 50px;
`

const ImageBlock = styled('img') `
  
`