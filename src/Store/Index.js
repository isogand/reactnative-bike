import {configureStore} from "@reduxjs/toolkit";
import commentSlice from "./comment-slice";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import authSlice from "./auth";

const store = configureStore({
    reducer: {
        ui: uiSlice,
        cart: cartSlice,
        comment: commentSlice,
        auth: authSlice,
    },
});

export default store;
