import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import cartAPI from "../../api/cart";

export const addItemToCart = createAsyncThunk(
  "cartSlice/addItemToCart",
  async (newItem) => {
    try {
      const result = await cartAPI.addItem(newItem);
      return result.data.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchCart = createAsyncThunk("cartSlice/fetchCart", async () => {
  try {
    const result = await cartAPI.fetchCart();
    return result.data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

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
    [addItemToCart.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addItemToCart.fulfilled]: (state, action) => {
      state.items = action.payload;
      message.success("Added item to cart successfully!", 3);
      state.isLoading = false;
      state.hasError = false;
    },
    [addItemToCart.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Fetch Cart
    [fetchCart.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchCart.rejected]: (state, action) => {
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
