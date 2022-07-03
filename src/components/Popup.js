import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { deleteCard, popup } from '../store/action/productAction';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
`;

const ContainerItem = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    min-height: 350px;
    background-color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

const Button = styled.button`
    padding: .5rem;
    width: 80px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${props => props.theme.primary};
    margin-top: 1rem;
`;

export default function Popup() {
    let cart = useSelector(state => state.product.cart)
    let total = useSelector(state => state.product.total)
    let dispatch = useDispatch();
    let pop = useSelector(state => state.product.popup)
    let pay = useSelector(state => state.product.pay)

    let closePopup = () => {
        dispatch(popup())
    }

    let closePopups = () => {
        dispatch(popup())
        dispatch(deleteCard());
    }

    if(pop){
        if(pay >= total){

            return (
                <Container>
                    <ContainerItem>
                        <h1 style={{textAlign: "center", fontSize: "2rem", marginBottom: "1.5rem"}}>Payment Success</h1>
                        <p style={{marginBottom: "1rem"}}>{cart.length} {cart.length === 1 ? 'item' : 'items'} purchased</p>
                        <ul>
                            {cart.map(item => (
                                <li>{item.title}, Price: {item.price}</li>
                            ))}
                        </ul>
                        <h2 style={{marginTop: "1.5rem"}}>Total Payment: {total}</h2>
                        <Button onClick={() => closePopups()}>Close</Button>
                    </ContainerItem>
                </Container>
            )
        }
        else{
            return (
                <Container>
                    <ContainerItem>
                        <h1 style={{textAlign: "center", fontSize: "2rem", marginBottom: "1.5rem"}}>Your money not enough to pay all the food</h1>
                        <Button onClick={closePopup}>Close</Button>
                    </ContainerItem>
                </Container>
            )
        }
    }
    else{
        return null;
    }
}
