import React from 'react';
import styled from 'styled-components';
import {images} from '../constants/images';

const InfoBlockLeft = () => {
    return (
        <Container>
            <Wrapper>
                <HeadingInfo>Ходова частина</HeadingInfo>
                <H2Info></H2Info>
                <Section>
                    <ImageBlock src={images.suspentionImg} alt=""/>
                    <TextBlock>

                    </TextBlock>
                </Section>
            </Wrapper>
        </Container>
    );
};

export default InfoBlockLeft;

const Container = styled('div') `
  background-image: url(${images.rightLogoBg});
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
  
`;