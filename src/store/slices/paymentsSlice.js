import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import paymentAPI from '../../ api/payment';

export const fetchPayments = createAsyncThunk(
  'paymentsSlice/fetchPayments',
  async () => {
    try {
      const result = await paymentAPI.getAll();
      return result.data.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchPayment = createAsyncThunk(
  'paymentsSlice/fetchPayment',
  async (payment_id) => {
    try {
      const result = await paymentAPI.getOne(payment_id);
      return result.data.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchDetails = createAsyncThunk(
  'paymentsSlice/fetchDetails',
  async (payment_id) => {
    try {
      const result = await paymentAPI.getDetails(payment_id);
      return result.data.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Reducer
const paymentsSlice = createSlice({
  name: 'paymentsSlice',
  initialState: {
    payments: [],
    details: [],
    paymentNeedUpdate: {},
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    // Fetch Payments
    [fetchPayments.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPayments.fulfilled]: (state, action) => {
      state.payments = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPayments.rejected]: (state, action) => {
      message.error(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Fetch Payment
    [fetchPayment.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPayment.fulfilled]: (state, action) => {
      state.paymentNeedUpdate = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPayment.rejected]: (state, action) => {
      message.error(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Fetch Detail
    [fetchDetails.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchDetails.fulfilled]: (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchDetails.rejected]: (state, action) => {
      message.error(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

// Selector
export const selectPayments = (state) => state.payments.payments;

export const selectDetails = (state) => state.payments.details;

export const selectPaymentNeedUpdate = (state) =>
  state.payments.paymentNeedUpdate;

export const selectPaymentIsLoading = (state) => state.payments.isLoading;

export default paymentsSlice.reducer;
