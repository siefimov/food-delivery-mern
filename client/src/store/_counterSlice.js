import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    addedFoodToCart: 0,
  },
  reducers: {
    addFoodToCart: (state) => {
      state.addedFoodToCart += 1;
    },
    removeFoodFromCart: (state) => {
      state.addedFoodToCart -= 1;
    },
    clearCartCounter: (state) => {
      state.addedFoodToCart = 0;
    },
  },
});

export const { addFoodToCart, removeFoodFromCart, clearCartCounter } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
