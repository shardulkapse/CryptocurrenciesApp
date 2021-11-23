import { configureStore } from "@reduxjs/toolkit";
import CoinDetailsSlice from "./slices/CoinDetailsSlice";
import CryptoCoinsSlice from "./slices/CryptoCoinsSlice";

const store = configureStore({
  reducer: {
    cryptoCoins: CryptoCoinsSlice.reducer,
    coinDetails: CoinDetailsSlice.reducer,
  },
});

export default store;
