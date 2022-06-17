import { actionTypes } from "../constants/actionTypes";

const initialState =
    [
        {
            id: 1,
            title: "hello",
        },
    ];

export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
    };
};