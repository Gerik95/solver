import React from 'react';
import {images} from '../../constants/images';
import styled from 'styled-components';
import { theme } from "../../constants/theme";

const UmfButton = () => {
    return (
        <UMFButton target='_blank' href='https://www.google.com/'>
            <img src={images.UMFLogo} alt="UMF logo"/>
            Підтримати ЗСУ
        </UMFButton>
    );
};

export default UmfButton;

const UMFButton = styled('a') `
  //position: absolute;
  align-self: center;
  //grid-column: 9 / 11;
  height: 50px;
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
  left: 70%;
  margin-left: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;
  border-radius: 10px;
  border: 1px solid #ffff;
  padding: 8px 15px;
  font-size: 14px;
  color: #ffff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #B9110C;
    border: 1px solid #B9110C;
  }
`