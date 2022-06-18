import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: [],
    product: {}
};

export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        case actionTypes.SELECTED_PRODUCT:
            return { ...state, product: payload };
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    };
};