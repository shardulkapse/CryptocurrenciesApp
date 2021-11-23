import { useSelector } from "react-redux";
import styles from "./AllCoins.module.css";
import millify from "millify";

function AllExchanges() {
  const Data = useSelector((state) => state.exchanges.exchanges);
  const isLoading = useSelector((state) => state.exchanges.isLoading);

 

  return (
    <div>
      {!isLoading && (
        <div className={styles.main}>
          
          <div className={styles.container}>
            {Data.map((coin) => (
              <div
                className={styles.card}
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
                  <span> Market Share: {millify(coin?.marketShare || 0)}%</span>
                  <span> Number of markets: {millify(coin?.numberOfMarkets || 0)}</span>
                  <span> Volume: {millify(coin?.volume || 0)}</span>
            
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AllExchanges;