import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { images } from '../constants/images';
import CardVacancies from '../components/CardVacancies';
import { Container } from "../styled/main";
import { theme } from "../constants/theme";

const Vacancies = () => {
  return (
    <>
      <Helmet>
        <title>СТО "Solver" - Вакансії</title>
        <meta name="description"
              content="Станція технічного обслуговування Солвер в Україні, місто Миколаїв, Херсонське шоссе 115"/>
      </Helmet>
      <ContainerVacancies>
        <Wrapper>
          <StartScreen>
            <Title>Цінуємо людей,</Title>
            <Title>які працюють</Title>
            <Title>руками</Title>
            <SubTitle>
              Обирайте Solver, ставайте частиною
              нашої дружної родини, та разом з нами
              допомагайте людям пересуватися
              комфортно.
            </SubTitle>
          </StartScreen>
        </Wrapper>
        <VacanciesBlock>
          <Heading>Вакансії на нашому сервісі</Heading>
          <CardsBlock>
            <CardItemFirst>
              <CardVacancies title="Моторист"
                             description="Робіть двигуни надійними, та заробляйте гроші."/>
            </CardItemFirst>
            <CardItemSecond>
              <CardVacancies title="Механік"
                             description="Робіть дорожній рух безпечним,а життя людей комфортним."/>
            </CardItemSecond>
            <CardItemThird>
              <CardVacancies title="Кондиціонувальник"
                             description="Впливайте на клімат за допомогою ваших знань."/>
            </CardItemThird>
          </CardsBlock>
        </VacanciesBlock>
      </ContainerVacancies>
    </>
  );
};

export default Vacancies;

const ContainerVacancies = styled.div`
  background: #0C0B0B;
`

const Wrapper = styled('div')`
  background: no-repeat url(${images.VacanciesBg});
  background-size: 100%;
  min-height: 100vh;
  padding: 160px 300px 60px 300px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: ${theme.breakpoint.xl}) {
    padding: 80px 150px 40px;
  }
  
  @media (max-width: ${theme.breakpoint.md}) {
    padding: 40px 75px 30px;
  }
  
  @media (max-width: ${theme.breakpoint.md}) {
    min-height: auto;
  }

  @media (max-width: ${theme.breakpoint.xsm}) {
    padding: 40px 20px 30px;
  }
`

const StartScreen = styled('div')`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

const Title = styled('h1')`
  grid-column: 1 / 13;
  color: white;
  font-weight: 700;
  font-size: 80px;
  align-self: start;
  margin: 0;

  @media (max-width: ${theme.breakpoint.md}) {
    font-size: 60px;
  }

  @media (max-width: ${theme.breakpoint.sm}) {
    font-size: 40px;
  }
`

const SubTitle = styled('h2')`
  grid-column: 3 / 13;
  font-size: 24px;
  align-self: end;
  text-align: right;
  margin: 0;
  max-width: 600px;
  padding-top: 250px;
  color: #BFBFBF;
  text-shadow: 0px 5px 6px #000;

  @media (max-width: ${theme.breakpoint.sm}) {
    //font-size: 60px;
    padding-top: 50px;
    font-size: 20px;
    margin-bottom: 100px;
  }
`

const VacanciesBlock = styled('div')`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-bottom: 50px;

  @media (max-width: ${theme.breakpoint.lg}) {
    padding-bottom: 20px;
  }
`

const Heading = styled('h3')`
  grid-column: 4 / 10;
  color: white;
  font-weight: 700;
  font-size: ${theme.fontSize.font_48_30};
  text-align: center;
  margin: 0;

  @media (max-width: ${theme.breakpoint.sm}) {
    grid-column: 2 / 12;
  }
`

const CardsBlock = styled('div')`
  grid-column: 1 / 13;
  grid-template-columns: repeat(11, 1fr);
  max-width: clamp(18.75rem, 85.938vw + 1.563rem, 87.5rem);
  margin: 50px auto 0;
  display: grid;

  @media (max-width: ${theme.breakpoint.lg}) {
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
  }
`

const CardItemFirst = styled.div`
  grid-column: 1 / 4;

  @media (max-width: ${theme.breakpoint.lg}) {
    grid-column: 1 / 5;
  }

  @media (max-width: ${theme.breakpoint.md}) {
    grid-column: 4 / 10;
  }
  @media (max-width: ${theme.breakpoint.sm}) {
    grid-column: 2 / 12;
  }
  @media (max-width: ${theme.breakpoint.xsm}) {
    grid-column: 1 / 13;
  }
`

const CardItemSecond = styled.div`
  grid-column: 5 / 8;

  @media (max-width: ${theme.breakpoint.lg}) {
    grid-column: 5 / 9;
  }
  @media (max-width: ${theme.breakpoint.md}) {
    grid-column: 4 / 10;
  }
  @media (max-width: ${theme.breakpoint.sm}) {
    grid-column: 2 / 12;
  }
  @media (max-width: ${theme.breakpoint.xsm}) {
    grid-column: 1 / 13;
  }
`

const CardItemThird = styled.div`
  grid-column: 9 / 12;

  @media (max-width: ${theme.breakpoint.lg}) {
    grid-column: 9 / 13;
  }
  @media (max-width: ${theme.breakpoint.md}) {
    grid-column: 4 / 10;
  }
  @media (max-width: ${theme.breakpoint.sm}) {
    grid-column: 2 / 12;
  }
  @media (max-width: ${theme.breakpoint.xsm}) {
    grid-column: 1 / 13;
  }
`