import {item} from "../../database/data"

const initialState = {
    items: item,
    cart: [],
    total: 0,
    pay: 0,
    popup: false
}

export const listReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case "ADD":
            let find = state.cart.find(item => {
                return item.title === payload[0].title
            });
            
            if(!find){
                let newCartItem = [
                    ...state.cart,
                    {
                        id: payload[0].id,
                        title: payload[0].title,
                        image: payload[0].image,
                        price: payload[0].price,
                        quantity: 1
                    }
                ]
                state.cart = newCartItem;
                state.total+=payload[0].price;

                return {
                    ...state,
                    cart: state.cart
                }
            }
            else{
                let index = state.cart.indexOf(find);
                let newCartItem = find;
                newCartItem.price = newCartItem.price/newCartItem.quantity;
                state.total-=newCartItem.price;

                if(payload[1] === "+"){
                    newCartItem.quantity += 1;
                }
                else{
                    newCartItem.quantity -= 1;
                }

                newCartItem.price = newCartItem.price*newCartItem.quantity;
                state.total+=newCartItem.price;
                
                state.cart.splice(index,1);

                if(newCartItem.quantity >= 1){
                    return {
                        ...state,
                        cart: [newCartItem, ...state.cart]
                    }
                }
                else{
                    return {
                        ...state,
                        cart: [...state.cart]
                    }
                }
                
            }
        case "PAY CHANGE":
            return{
                ...state,
                pay: payload
            }
        case "DELETE CART":
            return{
                ...state,
                cart: [],
                total: 0,
                pay: 0,
            }
        case "POPUP":
            let pop = state.popup ? false : true;
            return{
                ...state,
                popup: pop
            }
        default:
            return state;
    }
}