import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className={styles.navbar}>
      <h1>Crypto App</h1>
      <ul>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/cryptocurrencies" className={styles.link}>
          Coins
        </Link>
        <Link to="/market" className={styles.link}>
          Markets
        </Link>
        <Link to="/exchanges" className={styles.link}>
          Exchanges
        </Link>
      </ul>
      {isOpen && (
        <div className={styles.mobNav}>
          <Link to="/" className={styles.linkmob}>
            Home
          </Link>
          <Link to="/cryptocurrencies" className={styles.linkmob}>
            Coins
          </Link>
          <Link to="/market" className={styles.linkmob}>
            Markets
          </Link>
          <Link to="/exchanges" className={styles.linkmob}>
            Exchanges
          </Link>
        </div>
      )}
      {!isOpen && (
        <MenuIcon
          className={styles.burger}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      )}
      {isOpen && (
        <XIcon
          className={styles.close}
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default NavBar;
