import styles from "./GlobalStats.module.css";
import { useSelector } from "react-redux";
import millify from "millify";

function GlobalStats() {
  const globalStats = useSelector((state) => state.cryptoCoins.globalStats);
  return (
    <div className={styles.stats_main}>
      <h1>Global Crypto Stats</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>Total Cryptocurrencies</h3>
          <p>{millify(globalStats.total, { precision: 2 })}</p>
        </div>
        <div className={styles.card}>
          <h3>Total 24h Volume</h3>
          <p>
            $
            {millify(globalStats.total24hVolume, {
              precision: 2,
            })}
          </p>
        </div>
        <div className={styles.card}>
          <h3>Total Exchanges</h3>
          <p>
            {millify(globalStats.totalExchanges, {
              precision: 2,
            })}
          </p>
        </div>
        <div className={styles.card}>
          <h3>Total Market Cap</h3>
          <p>
            $
            {millify(globalStats.totalMarketCap, {
              precision: 2,
            })}
          </p>
        </div>
        <div className={styles.card}>
          <h3>Total Markets</h3>
          <p>
            {millify(globalStats.totalMarkets, {
              precision: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GlobalStats;
