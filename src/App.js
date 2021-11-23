import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Exchanges from "./pages/Exchanges";
import Market from "./pages/Market";
import CoinDetailsPage from "./pages/CoinDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CryptoCoinsActions } from "./redux/slices/CryptoCoinsSlice";
import Cryptocurrencies from "./pages/Cryptocurrencies";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDataHandler = async () => {
      const response = await fetch(
        "https://coinranking1.p.rapidapi.com/coins",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key":
              "dee324d1d3msh7653db62503ed46p189dbbjsn0a2335d42232",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      dispatch(CryptoCoinsActions.setLoading());
      dispatch(CryptoCoinsActions.setGlobalStats(data.data.stats));
      dispatch(CryptoCoinsActions.setCryptoCoins(data.data.coins));
    };
    fetchDataHandler();
  });
  return (
    <div className="App">
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Exchanges />} path="/exchanges" />
        <Route element={<Market />} path="/market" />
        <Route element={<Cryptocurrencies />} path="/cryptocurrencies" />
        <Route element={<CoinDetailsPage />} path="/coindetail/:coinId" />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
