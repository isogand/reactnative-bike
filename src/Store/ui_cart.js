import {createSlice} from "@reduxjs/toolkit";

const uiCart = createSlice({
    name: "uicart",
    initialState: {cartIsVisibl: false, notification: false},
    reducers: {
        toggl(state) {
            state.cartIsVisibl = !state.cartIsVisibl;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const uiActions = uiCart.actions;

export default uiCart.reducer;
