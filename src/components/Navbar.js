import React, {useState} from 'react'
import styled from 'styled-components'

export default function Navbar() {
    const [navItem] = useState(['Home', 'About', 'Food', 'Contact'])

    const Li = styled.li`
        width: 100%;
        color: black;
        padding: 1.5rem;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bolder;
        cursor: pointer;

        &:nth-of-type(3){
            background-color: ${props => props.theme.yellow};
        }
    `;

    const Container = styled.div`
        background-color: rgba(0,0, 0, .2);
    `;

    return (
        <Container style={{width: "100%", height: "100%R",gridColumn: "1/2", gridRow: "1/-1"}}>
            <ul>  
                {navItem.map(item => (
                    <Li>{item}</Li>
                ))}
            </ul>
        </Container>
    )
}
