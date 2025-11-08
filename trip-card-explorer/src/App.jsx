import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
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
    fetch("../data/data.json")
      .then((response) => response.json())

      .then((data) => {
        setTrips(data.trips);
        stopLoading();
      });
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
      
      <h1>Trip Explorer <FontAwesomeIcon icon={faPlane} /></h1>

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
