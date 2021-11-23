import { createSlice } from "@reduxjs/toolkit";

const CoinDetailsSlice = createSlice({
  name: "CoinDetails",
  initialState: { coinDetails: {}, isLoading: true },
  reducers: {
    setCoinDetails(state, action) {
      state.coinDetails = action.payload;
    },
    setLoadingFalse(state) {
      state.isLoading = false;
    },
    setLoadingTrue(state) {
      state.isLoading = true;
    },
  },
});

export default CoinDetailsSlice;

export const CoinDetailsActions = CoinDetailsSlice.actions;
