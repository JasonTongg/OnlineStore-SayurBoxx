import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports'
import {add} from '../store/action/productAction'

export default function Content() {
    let products = useSelector(state => state.product.items)
    let dispatch = useDispatch();

    const Card = styled.div`
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 300px;
        padding: 1rem;
    `;

    const CardInfo = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-block: 1rem;
        width: 100%;
        height: 100px;
    `;

    const Image = styled.div`
        width: 100%;
        height: 200px;
        background-image: url(${props => props.url});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    `;

    const Container = styled.section`
        display: flex;
        flex-wrap: wrap;
        padding: 1rem;
        justify-content: center;
        align-items: center;
        align-content: center;
    `;

    const addItem = (item) => {
        dispatch(add(item));
    }

    return (
        <Container style={{width: "100%", height: "100%R", gridColumn: "2/6", gridRow: "1/-1"}}>
            {products.map(item => (
                <Card key={item.id} onClick={() => addItem(item)}>
                    <Image url={item.image}></Image>
                    <CardInfo>
                        <h3>{item.title}</h3>
                        <h3>{item.price}</h3>
                    </CardInfo>
                </Card>
            ))}
        </Container>
    )
}
