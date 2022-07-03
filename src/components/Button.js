import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    padding: .5rem;
    width: 80px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${props => props.theme.primary};
`;

export default function Button(props) {
  let resetCart = () => {
    props.action();
  }
  return (
    <Btn onClick={resetCart}>{props.children}</Btn>
  )
}
