import styled, { css } from "styled-components";

export const columnCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div `
  width: 100%;
  height: 100%;
  max-width: clamp(18.75rem, 85.938vw + 1.563rem, 87.5rem);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
`