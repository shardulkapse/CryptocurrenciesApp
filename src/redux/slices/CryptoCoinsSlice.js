import { createSlice } from "@reduxjs/toolkit";

const coinInitialState = {
  globalStats: {
    total: 0,
    total24hVolume: 0,
    totalExchanges: 0,
    totalMarketCap: 0,
    totalMarkets: 0,
  },
  cryptoCoins: [],
  isLoading: true,
};

const CryptoCoinsSlice = createSlice({
  name: "CryptoCoins",
  initialState: coinInitialState,
  reducers: {
    setGlobalStats(state, action) {
      state.globalStats = action.payload;
    },
    setCryptoCoins(state, action) {
      state.cryptoCoins = action.payload;
    },
    setLoading(state) {
      state.isLoading = false;
    },
  },
});

export default CryptoCoinsSlice;

export const CryptoCoinsActions = CryptoCoinsSlice.actions;
