import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        data: [],
    },
    reducers: {
        addToList: (state, action) => {
            state.data.push(action.payload);
        },
        removeFromList: (state, action) => {
            const vehicleToRemove = action.payload;
            state.data = state.data.filter((item) => item.vehicle !== vehicleToRemove);
        },
    },
});

export const { addToList, removeFromList } = wishlistSlice.actions;
export default wishlistSlice.reducer;