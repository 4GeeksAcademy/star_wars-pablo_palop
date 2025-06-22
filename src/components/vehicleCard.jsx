import React from 'react';

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
    <div
      className="card bg-dark text-light border border-primary shadow-lg rounded-3"
      style={{ width: "18rem", margin: "10px" }}
    >
      <div className="card-body text-center">
        <h5 className="card-title text-primary">{vehicleName}</h5>
      </div>
      <ul className="list-group list-group-flush bg-dark border-top border-bottom border-secondary">
        <li className="list-group-item bg-dark text-light border-secondary"><strong>Crew capacity:</strong> {vehicleCrew}</li>
        <li className="list-group-item bg-dark text-light border-secondary"><strong>Passengers capacity:</strong> {vehiclePassengers}</li>
        <li className="list-group-item bg-group-item bg-dark text-light border-secondary"><strong>Max speed:</strong> {vehicleSpeed}</li>
      </ul>
      <div className="card-body d-flex justify-content-around align-items-center">
        <button
          onClick={onLearnMore}
          className="btn btn-outline-light text-primary"
        >
          Learn More
        </button>
        <button
          onClick={onFavorite}
          className={`btn ${isFavorite ? 'btn-primary' : 'btn-outline-secondary'}`}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;