import React from 'react';
import styled from 'styled-components';


const ItemScroll = ({ text, img, index, componentRef }) => {
   const buttonHandler = (ref) => () => {
       console.log(ref)
        ref?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
    };
    
    return (
        <ItemScrollBlock onClick={buttonHandler(componentRef)} style={{ top: (index * 60) + 250 }}>
            <ItemScrollText>{text}</ItemScrollText>
            <img src={img} alt={text} />
        </ItemScrollBlock>
    );
};

export default ItemScroll;

const ItemScrollBlock = styled('div') `
  display: flex;
  height: 50px;
  align-items: center;
  width: 300px;
  padding: 0 15px;
  position: absolute;
  transition: left 0.45s;
  cursor: pointer;
  left: 0px;
  img {
    width: 40px;
    flex-grow: 1;
    margin-left: 10px;
  }
  &:hover {
    left: 260px;
  }
`
const ItemScrollText = styled('div') `
  width: 240px;
  border-right: 1px solid #fff;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`