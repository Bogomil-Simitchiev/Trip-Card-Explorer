import TripCard from "./TripCard/TripCard";
import "./TripCardsList.css";

function TripCardList({ trips, onSelectTrip }) {
  if (!trips.length) {
    return <p className="status">No trips found.</p>;
  }

  return (
    <div className="grid">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} onMoreInfo={() => onSelectTrip(trip)} />
      ))}
    </div>
  );
}

export default TripCardList;
