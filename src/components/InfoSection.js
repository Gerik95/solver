import React from 'react';
import styled from 'styled-components';

const InfoSection = ({title, description, image, bgImage, alt, children, reverse, componentRef}) => {
    return (
        <Container ref={componentRef} bgImage={bgImage} reverse={reverse}>
            <Wrapper>
                <Title pb={description}>{title}</Title>
                {!!description && <H2Info>{description}</H2Info>}
                <Section reverse={reverse}>
                    <TextBlock>{children}</TextBlock>
                    <img src={image} alt={alt}/>
                </Section>
            </Wrapper>
        </Container>
    );
};

export default InfoSection;

const Container = styled.div `
  background: no-repeat ${(props => props.bgImage)} #000;
  background-position: ${(props => props.reverse ? 'bottom right' : 'bottom left')};
`

const Wrapper = styled('div') `
  padding: 120px 35px;
`

const Title = styled.h1 `
  padding-bottom: ${(props => !props.pb ? '90px' : '0px')};
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

const Section = styled.div `
  flex-direction: ${(props => props.reverse ? 'row-reverse' : 'row')};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  column-gap: 100px;
`

const TextBlock = styled('div') `
  max-width: 650px;
`