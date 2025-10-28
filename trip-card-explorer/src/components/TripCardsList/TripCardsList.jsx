import { useContext } from "react";
import LoadingContext from "../../contexts/LoadingContext";
import TripCard from "./TripCard/TripCard";
import "./TripCardsList.css";

function TripCardList({ trips, onSelectTrip }) {
  const { isLoading } = useContext(LoadingContext);

  return (
    <div className="grid">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        trips.length === 0 && <h1>No trips found!</h1>
      )}
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
          onMoreInfo={() => onSelectTrip(trip)}
        />
      ))}
    </div>
  );
}

export default TripCardList;
