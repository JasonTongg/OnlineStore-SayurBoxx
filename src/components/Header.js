import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding-block: 1rem;
    background-color: ${props => props.theme.yellow};
    text-align: center;
`;

const  Header = () => {
  return (
    <Container>
        <h1>SayurBoxx</h1>
    </Container>
  )
}

export default Header
