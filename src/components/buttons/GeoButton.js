import React from 'react';
import {images} from '../../constants/images';
import styled from 'styled-components';

const GeoButton = () => {
    return (
        <GEOButton target='_blank' href='https://goo.gl/maps/MZJ8vo7JpwRBvRB8A'>
            <img src={images.GeoLogo} alt="UMF logo"/>
            м.Миколаїв, Херсонське шосе 115
        </GEOButton>
    );
};

export default GeoButton;

const GEOButton = styled('a') `
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1, 1.1);
    color: #B9110C;
    fill: #B9110C;
  }
`