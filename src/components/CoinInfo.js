import {
  ChartSquareBarIcon,
  ChevronDoubleUpIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  PencilAltIcon,
  ExclamationCircleIcon,
  PresentationChartBarIcon,
  GlobeIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import millify from "millify";
import { useSelector } from "react-redux";
import styles from "./CoinInfo.module.css";
import parse from "html-react-parser";

function CoinInfo() {
  const coinDetails = useSelector((state) => state.coinDetails.coinDetails);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>
            {coinDetails.name} ({coinDetails.slug})
          </h2>
        </div>
        <p>
          {coinDetails.name} live price in US dollars. View value statistics,
          market cap and supply.
        </p>
      </div>

      {/* Stats */}

      <div className={styles.stats_cont}>
        <div className={styles.stats_card}>
          <h2>{coinDetails.name} Value Statistics</h2>
          <p>An overview showing the stats of {coinDetails.name}</p>
          <ul>
            <li>
              <div className={styles.first}>
                <CurrencyDollarIcon className={styles.icon} /> Price to USD
              </div>
              <h3>$ {millify(coinDetails.price, { precision: 3 })}</h3>
            </li>
            <li>
              <div className={styles.first}>
                <ChartSquareBarIcon className={styles.icon} /> Rank
              </div>
              <h3>{millify(coinDetails.rank)}</h3>
            </li>
            <li>
              <div className={styles.first}>
                <LightningBoltIcon className={styles.icon} /> 24h Volume
              </div>
              <h3>$ {millify(coinDetails.volume)}</h3>
            </li>
            <li>
              <div className={styles.first}>
                <GlobeAltIcon className={styles.icon} /> Market Cap
              </div>
              <h3>$ {millify(coinDetails.marketCap)}</h3>
            </li>
            <li>
              <div className={styles.first}>
                <ChevronDoubleUpIcon className={styles.icon} /> All-time-high
              </div>
              <h3>$ {millify(coinDetails.allTimeHigh.price)}</h3>
            </li>
          </ul>
        </div>

        {/* second card */}

        <div className={styles.stats_card}>
          <h2> Other Statistics</h2>
          <p>An overview showing the stats of all cryptocurrencies</p>
          <ul>
            <li>
              <div className={styles.first}>
                <PresentationChartBarIcon className={styles.icon} /> Number of
                Markets
              </div>
              <h3>{millify(coinDetails.numberOfMarkets)}</h3>
            </li>
            <li>
              <div className={styles.first}>
                <PencilAltIcon className={styles.icon} /> Number of Exchanges
              </div>
              <h3>{millify(coinDetails.numberOfExchanges)}</h3>
            </li>
            <li>
              <div className={styles.first}>
                <ExclamationCircleIcon className={styles.icon} /> Approved
                Supply
              </div>
              <h3>{coinDetails.approvedSupply ? "Yes" : "No"}</h3>
            </li>
            <li>
              <div className={styles.first}>
                <GlobeIcon className={styles.icon} /> Total Supply
              </div>
              <h3>$ {millify(coinDetails.totalSupply)}</h3>
            </li>
            <li>
              <div className={styles.first}>
                <UserGroupIcon className={styles.icon} /> Circulating Supply
              </div>
              <h3>$ {millify(coinDetails.circulatingSupply)}</h3>
            </li>
          </ul>
        </div>
      </div>

      {/* details */}
      <div className={styles.info}>
        <h1>{coinDetails.name} Details</h1>
        {parse(coinDetails?.description)}
      </div>
      <div className={styles.info}>
        <h1>{coinDetails.name} Links</h1>
        <div className={styles.extCont}>
          {coinDetails.links.map((link) => {
            return (
              <a
                key={link.name}
                href={link.url}
                className={styles.extLink}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.info}>
        <h1>{coinDetails?.name} Socials</h1>
        <div className={styles.extCont}>
          {coinDetails?.socials.map((link) => {
            return (
              <a
                key={link.name}
                href={link.url}
                className={styles.extLink}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;
