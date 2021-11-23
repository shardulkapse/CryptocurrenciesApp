import { createSlice } from "@reduxjs/toolkit";

const ExchangesSlice = createSlice({
  name: "ExchangesSlice",
  initialState: { exchanges: {}, isLoading: true },
  reducers: {
    setExchanges(state, action) {
      state.exchanges = action.payload;
    },
    setLoadingFalse(state) {
      state.isLoading = false;
    },
    setLoadingTrue(state) {
      state.isLoading = true;
    },
  },
});

export default ExchangesSlice;

export const ExchangesActions = ExchangesSlice.actions;