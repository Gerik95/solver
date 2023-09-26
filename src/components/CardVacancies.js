import React, {useState} from 'react';
import styled from 'styled-components';
import {images} from '../constants/images';

const CardVacancies = ({title, description}) => {
    const [isShown, setIsShown] = useState(false);

    const openClick = event => {
        setIsShown(true);
    }

    const closeClick = event => {
        setIsShown(false);
    }

    return (
            <Card>
                <Wrapper>
                    <Title>{title}</Title>
                    <H2Info>{description}</H2Info>
                    {!isShown ? <DetailsButton onClick={openClick}>Детальніше</DetailsButton> : <PhoneButton onClick={closeClick}>
                        <img src={images.phoneIcon} alt="Phone"/>
                        <a href="tel:+380730130014">+38 (073) 013 00 14</a>
                    </PhoneButton>}
                </Wrapper>
            </Card>
    );
};

export default CardVacancies;



const Card = styled('div')`
  background: linear-gradient(266deg, rgba(156, 156, 156, 0.40379901960784315) 0%, rgba(156, 156, 156, 0.4990371148459384) 40%, rgba(48, 48, 48, 0.6671043417366946) 75%);
  border-radius: 20px;
`

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 25px;
  gap: 30px;
`

const Title = styled('h1')`
  margin: 0;
  font-size: 24px;
  color: #ffff;
  text-align: left;
`

const H2Info = styled('h2')`
  margin: 0;
  font-size: 16px;
  color: #BFBFBF;
  text-align: left;
`

const DetailsButton = styled('button')`
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #ffff;
  color: #ffff;
  margin-top: 20px;
  padding: 8px 15px;
  font-size: 14px;
  align-self: end;
  transition: 0.5s ease;
  &:hover {
    border: 1px solid #B9110C;
    color: #B9110C;
    scale: 1.1;
  }
`

const PhoneButton = styled('div')`
  display: flex;
  align-self: end;
  border-radius: 10px;
  border: 1px solid #ffff;
  padding: 8px 15px;
  margin-top: 20px;
  color: #EBEBEB;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  img {
    width: 20px;
  }
  transition: 0.5s ease;
  &:hover {
    border: 1px solid #B9110C;
    color: #B9110C;
    scale: 1.1;
  }
`