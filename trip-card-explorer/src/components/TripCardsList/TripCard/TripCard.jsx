import './TripCard.css';

function TripCard({ trip, onMoreInfo }) {
  // Create an array with length equal to trip.rating
  const stars = Array.from({ length: trip.rating }, (_, i) => (
    <span key={i}>⭐</span>
  ));

  return (
    <div className="trip-card">
      <img src={trip.image} alt={trip.name} />
      <div className="trip-info">
        <h3>{trip.name}</h3>
        <p className="rating">{stars}</p> {/* Display stars */}
        <p>{trip.short_description}</p>
        <button onClick={onMoreInfo}>More Info</button>
      </div>
    </div>
  );
}

export default TripCard;
