import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const vehicleToRemove = action.payload;
            state.data = state.data.filter((item) => item.vehicle !== vehicleToRemove);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;