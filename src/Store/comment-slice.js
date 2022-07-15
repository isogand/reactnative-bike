import {createSlice} from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "comment",
    initialState: {
        items: null,
        totalQuantity: 0,
        changed: false,
    },

    reducers: {
        setInitialValues(state, action) {
            state.items = action.payload;
        },
        addItemToComment(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => {
                return item.comment === newItem.comment;
            });
            state.totalQuantity++;
            state.changed = true;
            {
                !existingItem &&
                    state.items.push({
                        comment: newItem.comment,
                    });
            }
        },
    },
});

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;
