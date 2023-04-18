import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import cartAPI from "../../api/cart";

export const addItem = createAsyncThunk(
  "cartSlice/addItem",
  async (newItem) => {
    try {
      console.log(newItem);
      const result = await cartAPI.addItem();
      return result.data.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Reducer
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    // Add item
    [addItem.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addItem.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [addItem.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

// Selector
export const selectAllItemInCart = (state) => state.cart.items;

export const selectCartIsLoading = (state) => state.cart.isLoading;

export default cartSlice.reducer;
