import { useEffect, useState } from "react";
import data from "../data/data.json";
import TripCardList from "./components/TripCardsList/TripCardsList";
import "./App.css";

function App() {
  const [trips, setTrips] = useState([]);
  
  useEffect(() => {
    setTrips(data.trips);
  }, []);

  
  return (
    <div className="app">
      <h1>Trip Explorer</h1>
     
      <TripCardList trips={trips} />
      
    </div>
  );
}

export default App;
