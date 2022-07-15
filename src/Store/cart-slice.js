import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: null,
        totalQuantity: 0,
        changed: false,
    },

    reducers: {
        setInitialValues(state, action) {
            state.items = action.payload;
        },
        addItemToCart(state, action) {
            // console.log("addItemToCart.action", action);
            // console.log("addItemToCart.state1", state);
            const newItem = action.payload;
            const existingItem = state.items.find((item) => {
                // console.log(item, newItem);
                return item.product_id === newItem.product_id;
            });
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    product_id: newItem.product_id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    parseFloat(existingItem.totalPrice) +
                    parseFloat(newItem.price);
            }
            // console.log("addItemToCart.state2", state);
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            // console.log("removeItemFromCart.state1", state);
            // console.log("removeItemFromCart.state1", action);
            const existingItem = state.items.find(
                (item) => item.product_id === id
            );
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(
                    (item) => item.product_id !== id
                );
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
