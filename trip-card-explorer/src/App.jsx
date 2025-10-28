import { useContext, useEffect, useState } from "react";
import data from "../data/data.json";
import TripCardList from "./components/TripCardsList/TripCardsList";
import "./App.css";
import LoadingContext from "./contexts/LoadingContext";

function App() {
  const [trips, setTrips] = useState([]);
  const { startLoading, stopLoading } = useContext(LoadingContext);

  useEffect(() => {
    startLoading();
    // here I simulate a fetch with a timeout to show the loading state
    setTimeout(() => {
      setTrips(data.trips);
      stopLoading();
    }, 1000);
  }, []);

  return (
      <div className="app">
        <h1>Trip Explorer</h1>

        <TripCardList trips={trips} />
      </div>
  );
}

export default App;
