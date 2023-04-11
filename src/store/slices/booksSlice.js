import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import bookAPI from "../../api/book";

export const fetchTrending = createAsyncThunk(
  "booksSlice/fetchTrending",
  async () => {
    try {
      console.log("Run on before");
      const result = await bookAPI.getTrending();
      console.log("Run on after");
      return result.data.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchBestSeller = createAsyncThunk(
  "booksSlice/fetchBestSeller",
  async () => {
    try {
      const result = await bookAPI.getBestSeller();
      return result.data.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchNewest = createAsyncThunk(
  "booksSlice/fetchNewest",
  async () => {
    try {
      const result = await bookAPI.getNewest();
      return result.data.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Reducer
const booksSlice = createSlice({
  name: "booksSlice",
  initialState: {
    trendingBooks: [],
    bestSellerBooks: [],
    newestBooks: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    // Fetch Trending
    [fetchTrending.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchTrending.fulfilled]: (state, action) => {
      state.trendingBooks = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchTrending.rejected]: (state, action) => {
      // message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Fetch Best Seller
    [fetchBestSeller.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchBestSeller.fulfilled]: (state, action) => {
      state.bestSellerBooks = [
        ...action.payload,
        ...action.payload,
        ...action.payload,
      ];
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchBestSeller.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Fetch Newest
    [fetchNewest.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchNewest.fulfilled]: (state, action) => {
      state.newestBooks = [
        ...action.payload,
        ...action.payload,
        ...action.payload,
      ];
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchNewest.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

// Selector
export const selectTrendingBooks = (state) => state.books.trendingBooks;

export const selectBestSellerBooks = (state) => state.books.bestSellerBooks;

export const selectNewestBooks = (state) => state.books.newestBooks;

export const selectBookIsLoading = (state) => state.books.isLoading;

export default booksSlice.reducer;
