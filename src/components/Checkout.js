import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { payChange, deleteCard, popup } from '../store/action/productAction';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: "100%";
    height: "100%";
`;

const SmallContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .3rem 2rem;

    & > input{
        border: 1px solid rgba(0,0,0,.5);
        outline: none;
        width: 70%;
    }
`;

export default function Checkout() {
    let total = useSelector(state => state.product.total);
    let pay = useSelector(state => state.product.pay);
    let dispatch = useDispatch();

    let change = (e) => {
        dispatch(payChange(e.target.value));
    }

    let reset = (e) => {
        dispatch(deleteCard());
    }

    let openPopup = () => {
        dispatch(popup())
    }
    return (
        <Container>
            <SmallContainer>
                <h4>Total: </h4>
                <h4>{total}</h4>
            </SmallContainer>
            <SmallContainer>
                <h4>Pay: </h4>
                <input type="number" onChange={change}/>
            </SmallContainer>
            <SmallContainer>
                <h4>Change: </h4>
                <h4>{pay<total ? 0 : pay-total}</h4>
            </SmallContainer>
            <SmallContainer>
                <Button action={openPopup}>Pay</Button>
                <Button action={reset}>Reset</Button>
            </SmallContainer>
        </Container>
    )
}
