import React from 'react';
import styled from 'styled-components';
import DownloadIcon from '../../assets/images/svg/DownloadIcon';

const DownloadButton = () => {
    function downloadFile(url, fileName) {
        fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
            .then(res => res.blob())
            .then(res => {
                const aElement = document.createElement('a');
                aElement.setAttribute('download', fileName);
                const href = URL.createObjectURL(res);
                aElement.href = href;
                // aElement.setAttribute('href', href);
                aElement.setAttribute('target', '_blank');
                aElement.click();
                URL.revokeObjectURL(href);
            });
    };

    return (
        <Download onClick={() => downloadFile('../../data/business-card/card.vcf', 'card.vcf')} >
            <img src={DownloadIcon} alt="Download business card"/>
            Отримати візитку
        </Download>
    );
};

export default DownloadButton;

const Download = styled('button') `
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