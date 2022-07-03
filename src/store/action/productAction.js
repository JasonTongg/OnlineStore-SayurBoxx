export let add = (item, act = "+") => {
    return {
        type: "ADD",
        payload: [item, act]
    }
}

export let payChange = (item) => {
    return {
        type: "PAY CHANGE",
        payload: item
    }
}

export let deleteCard = () => {
    return{
        type: "DELETE CART",
    }
}

export let popup = () => {
    return{
        type: "POPUP",
    }
}