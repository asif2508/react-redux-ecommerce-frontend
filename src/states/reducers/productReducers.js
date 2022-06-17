import { actionTypes } from "../constants/actionTypes";

const initialState ={
    products:[]
};

export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products: payload};

        default:
            return state;
    };
};