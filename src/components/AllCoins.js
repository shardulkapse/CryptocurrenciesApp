import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./AllCoins.module.css";
import millify from "millify";
import { useState, useEffect } from "react";

function AllCoins() {
  const Data = useSelector((state) => state.cryptoCoins.cryptoCoins);
  const isLoading = useSelector((state) => state.cryptoCoins.isLoading);
  const [searchTerm, setSearchTerm] = useState("");
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    setCoinData(Data);
    const filteredData = Data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCoinData(filteredData);
  }, [coinData, searchTerm, Data]);

  return (
    <div>
      {!isLoading && (
        <div className={styles.main}>
          <div className={styles.searchcrypto}>
            <input
              placeholder="Search Cryptocurrencies"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            ></input>
          </div>
          <div className={styles.container}>
            {coinData.map((coin) => (
              <Link
                className={styles.card}
                to={`/coindetail/${coin.id}`}
                key={coin.rank}
              >
                <div className={styles.first}>
                  <div className={styles.name}>
                    <h4>
                      {coin?.rank}. {coin?.name}
                    </h4>
                  </div>
                  <img src={coin?.iconUrl} className={styles.icon} alt="icon" />
                </div>
                <div className={styles.info}>
                  <span> Price: ${millify(coin?.price || 0)}</span>
                  <span> Market Cap: ${millify(coin?.marketCap || 0)}</span>
                  <span> Daily Change: {millify(coin?.change || 0)}%</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AllCoins;
