import React from 'react'
import styled, { css } from 'styled-components';

export default function StyledComponent() {
  const Container = styled.div`
  dispaly: flex;
  `;
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #3c5b69;
    color:#b9eaff;
    margin: 0 1em;
    padding: 0 1em;
    ${(props) =>
      props.primary &&
      css`
        background: #009cd5;
        color: white;
      `};
  `;

  return (
    <>
      <Container>
        <Button>Button</Button>
        <Button primary>primary Button</Button>
      </Container>
    </>
  )
}
