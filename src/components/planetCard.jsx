import React from 'react';

const PlanetCard = ({
  planetName,
  planetClimate,
  planetPopulation,
  planetGravity,
  onFavorite,
  onLearnMore,
  isFavorite = false
}) => {
  return (
    <div
      className="card bg-dark text-light border border-info shadow-lg rounded-3"
      style={{ width: "18rem", margin: "10px" }}
    >
      <div className="card-body text-center">
        <h5 className="card-title text-info">{planetName}</h5>
      </div>
      <ul className="list-group list-group-flush bg-dark border-top border-bottom border-secondary">
        <li className="list-group-item bg-dark text-light border-secondary"><strong>Climate:</strong> {planetClimate}</li>
        <li className="list-group-item bg-dark text-light border-secondary"><strong>Population:</strong> {planetPopulation}</li>
        <li className="list-group-item bg-dark text-light border-secondary"><strong>Gravity:</strong> {planetGravity}</li>
      </ul>
      <div className="card-body d-flex justify-content-around align-items-center">
        <button
          onClick={onLearnMore}
          className="btn btn-outline-light text-info"
        >
          Learn More
        </button>
        <button
          onClick={onFavorite}
          className={`btn ${isFavorite ? 'btn-info' : 'btn-outline-secondary'}`}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default PlanetCard;