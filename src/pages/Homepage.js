import { useSelector } from "react-redux";
import GlobalStats from "../components/GlobalStats";
import TopCryptoCoins from "../components/TopCryptoCoins";
import Footer from "../components/ui/Footer";
import Loading from "../components/ui/Loading";
import NavBar from "../components/ui/NavBar";

function Homepage() {
  const isLoading = useSelector((state) => state.cryptoCoins.isLoading);
  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <NavBar />
          <GlobalStats />
          <TopCryptoCoins />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Homepage;
