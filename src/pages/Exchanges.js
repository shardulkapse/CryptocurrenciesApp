import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllExchanges from "../components/AllExchanges";
import Footer from "../components/ui/Footer";
import Loading from "../components/ui/Loading";
import NavBar from "../components/ui/NavBar";
import { ExchangesActions } from "../redux/slices/ExchangesSlice";

const Exchanges = () => {
    const isLoading = useSelector((state) => state.exchanges.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ExchangesActions.setLoadingTrue());
        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/exchanges',
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': 'dee324d1d3msh7653db62503ed46p189dbbjsn0a2335d42232'
            }
          };
    
        axios
          .request(options)
          .then(function (response) {
            dispatch(ExchangesActions.setExchanges(response.data.data.exchanges));
            dispatch(ExchangesActions.setLoadingFalse());
          })
          .catch(function (error) {
            console.error(error);
          });
      }, [dispatch]);


    return <div>
    {isLoading && <Loading />}

   {!isLoading &&  <>
      <NavBar />
  <AllExchanges />
      <Footer />
    </>}
  </div>
}

export default Exchanges