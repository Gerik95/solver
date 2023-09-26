import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {images} from '../constants/images';
import CardVacancies from '../components/CardVacancies';

const Vacancies = () => {
    return (
        <>
            <Helmet>
                <title>СТО "Solver" - Вакансії</title>
                <meta name="description"
                      content="Станція технічного обслуговування Солвер в Україні, місто Миколаїв, Херсонське шоссе 115"/>
            </Helmet>
            <Container>
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
                    <VacanciesBlock>
                        <Heading>Вакансії на нашому сервісі</Heading>
                        <CardsBlock>
                            <CardVacancies title="Моторист"
                                           description="Робіть двигуни надійними, та заробляйте гроші."/>
                            <CardVacancies title="Механік"
                                           description="Робіть дорожній рух безпечним,а життя людей комфортним."/>
                            <CardVacancies title="Кондиціонувальник"
                                           description="Впливайте на клімат за допомогою ваших знань."/>
                        </CardsBlock>
                    </VacanciesBlock>
                </Wrapper>
            </Container>
        </>
    );
};

export default Vacancies;

const Container = styled.div`
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
`

const StartScreen = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled('h1')`
  color: white;
  font-weight: 700;
  font-size: 80px;
  align-self: start;
  margin: 0;
`

const SubTitle = styled('h2')`
  font-size: 24px;
  align-self: end;
  text-align: right;
  margin: 0;
  max-width: 600px;
  padding-top: 250px;
  color: #BFBFBF;
  text-shadow: 0px 5px 6px #000;
`

const VacanciesBlock = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  margin-top: 100px;
`

const Heading = styled('h3')`
  color: white;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  margin: 0;
`

const CardsBlock = styled('div')`
  display: flex;
  gap: 50px;
`