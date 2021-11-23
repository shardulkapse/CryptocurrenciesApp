import styles from "./TopCryptoCoins.module.css";
import { useSelector } from "react-redux";
import millify from "millify";
import { Link } from "react-router-dom";

function TopCryptoCoins() {
  const data = useSelector((state) => state.cryptoCoins.cryptoCoins);
  const isLoading = useSelector((state) => state.cryptoCoins.isLoading);
  const coinData = data.slice(0, 12);
  return (
    <div>
      {!isLoading && (
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Top Cryptocurrencies in the World</h1>
            <Link to="/cryptocurrencies" className={styles.link}>
              Show All
            </Link>
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

export default TopCryptoCoins;
