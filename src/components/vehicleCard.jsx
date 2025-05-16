const VehicleCard = ({
  vehicleName,
  vehicleCrew,
  vehiclePassengers,
  vehicleSpeed,
  onFavorite,
  onLearnMore,
  isFavorite = false
}) => {
  return (
    <div className="card shadow-sm" style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body text-center">
        <h5 className="card-title">{vehicleName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Crew capacity:</strong> {vehicleCrew}</li>
        <li className="list-group-item"><strong>Passengers capacity:</strong> {vehiclePassengers}</li>
        <li className="list-group-item"><strong>Max speed:</strong> {vehicleSpeed}</li>
      </ul>
      <div className="card-body d-flex justify-content-around">
        <button onClick={onFavorite} className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-primary'}`}>
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <button onClick={onLearnMore} className="btn btn-outline-danger">Learn More</button>
      </div>
    </div>
  );
};

export default VehicleCard;
