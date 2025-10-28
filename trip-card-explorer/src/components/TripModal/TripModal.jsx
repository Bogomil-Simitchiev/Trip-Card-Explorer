import "./TripModal.css";

function TripModal({ trip, onClose }) {
  if (!trip) return null;

  const stars = Array.from({ length: trip.rating }, (_, i) => <span key={i}>⭐</span>);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={trip.image} alt={trip.name} className="modal-image" />
        <div className="modal-info">
          <h2>{trip.name}</h2>
          <p className="modal-rating">{stars}</p>
          <p className="modal-description">{trip.long_description}</p>
        </div>
      </div>
    </div>
  );
}

export default TripModal;
