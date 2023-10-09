import React from 'react';
import styled from 'styled-components';
import { images } from '../constants/images';
import { itemScrollData } from '../data/item-scroll.data';
import ItemScroll from './item-scroll/ItemScroll';
import { theme } from "../constants/theme";
import { columnCenter } from "../styled/main";


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
                    <Logo src={images.cardLogo} alt="footer logo"/>
                    <CardHeading>Solver</CardHeading>
                    <CardWorkDay>Без вихідних</CardWorkDay>
                    <CardTime>09:00 - 19:00</CardTime>
                </CardSolver>
            </Wrapper>
        </Container>
    );
};

export default FirstScreen;

const Container = styled('div') `
  background-image: url(${images.firstScreen});
  height: calc(100vh - 50px);
  background-size: cover;
`

const Wrapper = styled('div') `
  padding: 0 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  @media (max-width: ${theme.breakpoint.lg}) {
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
  }
`

const ScrollStyles = styled('div')`
  padding: 20px;
  position: absolute;
  top: 10px;
  left: -240px;
  transform: translate(-50%,-50%);
  z-index: 2;
  
  @media (max-width: ${theme.breakpoint.lg}) {
    display: none;
  }
`

const CardSolver = styled('div')`
  ${columnCenter};
  background: linear-gradient(180deg, rgba(0,91,187,0.5) 0%, rgba(255,213,0,0.5) 100%);
  width: clamp(18.75rem, 15.625vw + 15.625rem, 31.25rem);
  border-radius: 20px;
  padding-top: 60px;
  padding-bottom: 20px;

  @media (max-width: ${theme.breakpoint.lg}) {
    width: clamp(21.875rem, 61.012vw + 9.673rem, 47.5rem);
  }
`

const Logo = styled.img`
  width: 100%;
  max-width: clamp(12.5rem, 4.688vw + 11.563rem, 16.25rem);
`

const CardHeading = styled('p') `
  padding: 30px 0;
  margin: 0 0 15px;
  color: #121619;
  font-size: clamp(1.875rem, 1.406vw + 1.594rem, 3rem);
  font-family: 'Michroma', sans-serif;
  text-shadow: 0px 13px 6px;
  text-align: center;

  @media (max-width: ${theme.breakpoint.sm}) {
    color: ${theme.color.lightGrey};
    padding: 0;
    margin: 15px 0;
    text-shadow: 0px 6px 10px;
  }
`

const CardWorkDay = styled('p') `
  margin: 15px 0 0;
  font-size: clamp(1.5rem, 1.25vw + 1.25rem, 2.5rem);
  color: #121619;
  text-shadow: 0 13px 6px;
  text-align: center;

  @media (max-width: ${theme.breakpoint.sm}) {
    color: ${theme.color.lightGrey};
    text-shadow: none;
  }
`

const CardTime = styled('p') `
  margin: 0;
  color: #B9110C;
  font-family: 'Michroma', sans-serif;
  text-shadow: 0 13px 6px;
  font-size: clamp(1.5rem, 1.25vw + 1.25rem, 2.5rem);
  text-align: center;

  @media (max-width: ${theme.breakpoint.sm}) {
    color: ${theme.color.neonRed};
    text-shadow: none;
  }
`