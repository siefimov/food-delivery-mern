import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingFoodItem = state.cart.find((item) => item._id === action.payload._id);

      if (existingFoodItem) {
        existingFoodItem.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },

    updateCartItem: (state, action) => {
      const { foodId, newQuantity } = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item._id === foodId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      state.cart = updatedCart;
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((food) => food._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },

    getCart: (state) => {
      const result = JSON.parse(localStorage.getItem("cart"));
      state.cart = [...result];
    },

    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem, clearCart, getCart } = cartSlice.actions;
export default cartSlice.reducer;
