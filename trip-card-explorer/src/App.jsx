import { useContext, useEffect, useState } from "react";
import data from "../data/data.json";
import TripCardList from "./components/TripCardsList/TripCardsList";
import "./App.css";
import LoadingContext from "./contexts/LoadingContext";
import TripModal from "./components/TripModal/TripModal";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    startLoading();
    // here I simulate a fetch with a timeout to show the loading state
    setTimeout(() => {
      setTrips(data.trips);
      stopLoading();
    }, 1000);
  }, []);

  const filteredTrips = trips
  .filter((trip) =>
    trip.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a, b) => {
    if (sortOrder === "high") return b.rating - a.rating;
    if (sortOrder === "low") return a.rating - b.rating;
    return 0;
  });

  return (
    <div className="app">
      <h1>Trip Explorer</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSortOrder={setSortOrder}
        sortOrder={sortOrder}

      />
      <TripCardList trips={filteredTrips} onSelectTrip={setSelectedTrip} />
      {selectedTrip && (
        <TripModal trip={selectedTrip} onClose={() => setSelectedTrip(null)} />
      )}
    </div>
  );
}

export default App;
