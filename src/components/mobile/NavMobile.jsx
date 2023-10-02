import React from 'react';
import styled from "styled-components";
import { handleNavActive } from "../../store/slices/navSlice";
import { ButtonMenu } from "../../styled/button";
import { useDispatch } from "react-redux";
import Exit from "../../assets/images/icons/Exit";

const NavMobile = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <ButtonMenu onClick={() => dispatch(handleNavActive(false))}>
        <Exit/>
      </ButtonMenu>
      NavMobile
    </Container>
  );
};

export default NavMobile;

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  background-color: red;
`