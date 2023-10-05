import React from 'react';
import styled from 'styled-components';
import { Container } from "../styled/main";
import { theme } from "../constants/theme";

const InfoSection = ({ title, description, image, bgImage, alt, children, reverse, componentRef }) => {
  return (
    <ContainerInfoSection ref={componentRef} bgImage={bgImage} reverse={reverse}>
      <InfoSectionWrapper $reverse={reverse}>
        <Title pb={description}>{title}</Title>
        {!!description && <H2Info>{description}</H2Info>}
        <Section reverse={reverse}>
          <TextBlock>{children}</TextBlock>
          <Image src={image} alt={alt}/>
        </Section>
      </InfoSectionWrapper>
    </ContainerInfoSection>
  );
};

export default InfoSection;

const ContainerInfoSection = styled.div`
  background: no-repeat ${(props => props.bgImage)} #000;
  background-position: ${(props => props.reverse ? 'bottom right' : 'bottom left')};
  padding-bottom: 30px;
`

const InfoSectionWrapper = styled(Container)`
  @media (max-width: ${theme.breakpoint.lg}) {
    background: ${({ $reverse }) => !$reverse ? theme.gradient.trinityGreyHorizontal : 'none'};
    box-sizing: border-box;
    border-radius: 20px;
    padding: 0 30px;
  }
`

const Title = styled.h1`
  grid-column: 4 / 10;
  padding-top: 20px;
  padding-bottom: ${(props => !props.pb ? '90px' : '0px')};
  margin: 0;
  font-size: ${theme.fontSize.font_48_30};
  color: #ffff;
  text-align: center;

  @media (max-width: ${theme.breakpoint.lg}) {
    padding-bottom: 0;
    padding-top: 0;
    margin-top: 50px;
    grid-column: 2 / 12;
  }

  @media (max-width: ${theme.breakpoint.lg}) {
    grid-column: 1 / 13;
  }
`

const H2Info = styled('h2')`
  grid-column: 4 / 10;
  padding: 25px 0 60px 0;
  margin: 0;
  font-size: 16px;
  color: #BFBFBF;
  text-align: center;

  @media (max-width: ${theme.breakpoint.lg}) {
    padding: 20px 0;
    grid-column: 1 / 13;
  }
`

const Section = styled.div`
  grid-column: 1 / 13;
  flex-direction: ${(props => props.reverse ? 'row-reverse' : 'row')};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  column-gap: 100px;
`

const TextBlock = styled('div')`
  flex-grow: 1;
`

const Image = styled.img`
  flex-grow: 1;
  max-width: clamp(18.75rem, 37.5vw + 0.75rem, 38.25rem);

  @media (max-width: ${theme.breakpoint.lg}) {
    display: none;
  }
`