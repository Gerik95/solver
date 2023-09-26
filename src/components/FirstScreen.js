import React from 'react';
import styled from 'styled-components';
import {images} from '../constants/images';
import {itemScrollData} from '../data/item-scroll.data';
import ItemScroll from './item-scroll/ItemScroll';

const FirstScreen = ({componentsRef, itemScrollToggle}) => {
    return (
        <Container>
            <Wrapper>
                    <ScrollStyles>
                        {itemScrollToggle && itemScrollData.map((el, index) => {
                            return (
                                <ItemScroll
                                    componentRef={componentsRef && componentsRef[el.ref]}
                                    text={el.name}
                                    img={el.icon}
                                    key={el.id}
                                    index={index}
                                />
                            )
                        })}
                    </ScrollStyles>
                <CardSolver>
                    <img src={images.cardLogo} alt="footer logo"/>
                    <CardHeading>Solver</CardHeading>
                    <CardWorkDay>Без вихідних</CardWorkDay>
                    <CardTime>09:00 - 18:00</CardTime>
                </CardSolver>
            </Wrapper>
        </Container>
    );
};

export default FirstScreen;

const Container = styled('div') `
  background-image: url(${images.firstScreen});
  height: 100vh;
  background-size: cover;
  @media screen and (max-width: 500px) {
    
  }
`

const Wrapper = styled('div') `
  padding: 0 30px;
`

const ScrollStyles = styled('div')`
  padding: 20px;
  position: absolute;
  top: 10px;
  left: -240px;
  transform: translate(-50%,-50%);
  z-index: 2;
`

const CardSolver = styled('div') `
  background: linear-gradient(180deg, rgba(0,91,187,0.3533788515406162) 0%, rgba(255,213,0,0.3533788515406162) 100%);
  width: 500px;
  height: 611px;
  position: absolute;
  top: 20%;
  left: 70%;
  border-radius: 20px;
  padding-top: 60px;
  img{
    position: relative;
    left: 125px;
  }
`

const CardHeading = styled('p') `
  padding: 30px 0;
  margin: 0;
  margin-bottom: 15px;
  color: #121619;
  font-size: 48px;
  font-family: 'Michroma', sans-serif;
  text-shadow: 0px 13px 6px;
  text-align: center;
`

const CardWorkDay = styled('p') `
  padding: 0;
  margin: 0;
  margin-top: 15px;
  font-size: 40px;
  color: #121619;
  text-shadow: 0px 13px 6px;
  text-align: center;
`

const CardTime = styled('p') `
  padding: 0;
  margin: 0;
  color: #B9110C;
  font-family: 'Michroma', sans-serif;
  text-shadow: 0px 13px 6px;
  font-size: 40px;
  text-align: center;
`