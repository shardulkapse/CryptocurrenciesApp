import { configureStore } from "@reduxjs/toolkit";
import CoinDetailsSlice from "./slices/CoinDetailsSlice";
import CryptoCoinsSlice from "./slices/CryptoCoinsSlice";
import ExchangesSlice from "./slices/ExchangesSlice";

const store = configureStore({
  reducer: {
    cryptoCoins: CryptoCoinsSlice.reducer,
    coinDetails: CoinDetailsSlice.reducer,
    exchanges: ExchangesSlice.reducer
  },
});

export default store;
