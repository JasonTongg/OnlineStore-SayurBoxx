import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports'
import {add} from '../store/action/productAction'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: "100%"; 
    height: "100%";
    gap: .5rem;
`;

const CardItem = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: rgba(0,0, 0, .2);
    padding: 1rem;
`;

const CardButton = styled.div`
    display: flex;
    width: 35%;
    justify-content: space-around;
    align-items: center;
`;

const SmallButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primary};
    border: none;
    outline: none;
    cursor: pointer;
`;

export default function Cart() {
    let cartItem = useSelector(state => state.product.cart);
    let dispatch = useDispatch();

    const addItem = (item, act) => {
        dispatch(add(item, act));
    }

    return (
        <Container>
            {cartItem.map(item => (
                <CardItem key={item.id}>
                    <h4>{item.title}</h4>
                    <CardButton>
                        <SmallButton onClick={() => addItem(item, "-")}><p>-</p></SmallButton>
                        <h3>{item.quantity}</h3>
                        <SmallButton onClick={() => addItem(item)}><p>+</p></SmallButton>
                    </CardButton>
                    <h4>{item.price}</h4>
                </CardItem>
            ))}
        </Container>
    )
}
