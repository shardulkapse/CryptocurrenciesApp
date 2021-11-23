import CoinInfo from "../components/CoinInfo";
import Loading from "../components/ui/Loading";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CoinDetailsActions } from "../redux/slices/CoinDetailsSlice";

function CoinDetailsPage() {
  const isLoading = useSelector((state) => state.coinDetails.isLoading);
  const { coinId } = useParams();
  const coinDetails = useSelector((state) => state.coinDetails.coinDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CoinDetailsActions.setLoadingTrue());
    const options = {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "dee324d1d3msh7653db62503ed46p189dbbjsn0a2335d42232",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        dispatch(CoinDetailsActions.setCoinDetails(response.data.data.coin));
        dispatch(CoinDetailsActions.setLoadingFalse());
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [dispatch, coinId]);
  console.log(coinDetails);

  return (
    <div>
      {isLoading && <Loading />}

     {!isLoading &&  <>
        <NavBar />
        <CoinInfo />
        <Footer />
      </>}
    </div>
  );
}

export default CoinDetailsPage;
