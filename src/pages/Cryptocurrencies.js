import { useSelector } from "react-redux";
import AllCoins from "../components/AllCoins";
import Footer from "../components/ui/Footer";
import Loading from "../components/ui/Loading";
import NavBar from "../components/ui/NavBar";

function Cryptocurrencies() {
  const isLoading = useSelector((state) => state.cryptoCoins.isLoading);
  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <NavBar />
          <AllCoins />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Cryptocurrencies;
