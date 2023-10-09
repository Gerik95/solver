import React from 'react';
import { images } from '../../constants/images';
import styled from 'styled-components';
import GeoIcon from "../../assets/images/GeoIcon";

const GeoButton = ({ color = 'white' }) => {
  return (
    <GEOButton $color={color} target='_blank' href='https://goo.gl/maps/MZJ8vo7JpwRBvRB8A'>
      {/*<img src={images.GeoLogo} alt="UMF logo"/>*/}
      <GeoIcon/>
      <Address>
        м.Миколаїв, <br/> Херсонське шосе 115
      </Address>
    </GEOButton>
  );
};

export default GeoButton;

const GEOButton = styled('a')`
  display: flex;
  align-items: center;
  color: ${({ $color }) => $color};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s;
  grid-column: 11 / 13;

  &:hover {
    transform: scale(1.1, 1.1);
    color: #B9110C;
    fill: #B9110C;
  }
`

const Address = styled.span`
  margin-left: 5px;
`