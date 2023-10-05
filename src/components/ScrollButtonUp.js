import React, {useEffect, useState} from 'react';

import {images} from '../constants/images';
import styled from 'styled-components';
import { theme } from "../constants/theme";

const ScrollButtonUp = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isShowButtonUp, setIsShowButtonUp] = useState(false);


    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (scrollPosition > 250) setIsShowButtonUp(true);
        if (scrollPosition < 250) setIsShowButtonUp(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton);
        return () => {
            window.removeEventListener('scroll', handleVisibleButton);
        };
    }, [scrollPosition]);

    useEffect(() => {
        setIsShowButtonUp(false)
    }, [])

    const onTopButton = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <ButtonIcon isShowButtonUp={isShowButtonUp}>
            <img onClick={onTopButton} src={images.arrowUp} alt="arrow up"/>
        </ButtonIcon>
    );
};

export default ScrollButtonUp;

const ButtonIcon = styled.div `
  position: fixed;
  bottom: 50px;
  right: ${(props => props.isShowButtonUp ? '50px' : '-50px')};
  cursor: pointer;
  transition: right .35s ease;
  
  &:hover {
    opacity: .6;
  }
  
  img {
    height: 50px;
    width: 50px;
  }

    @media (max-width: ${theme.breakpoint.lg}) {
        right: ${(props => props.isShowButtonUp ? '10px' : '-50px')};
    }
`