import React from 'react';

const CharacterCard = ({
  characterName,
  characterHairColor,
  characterEyesColor,
  characterGender,
  onFavorite,
  onLearnMore,
  isFavorite = false
}) => {
  return (
    <div
      className="card bg-dark text-light border border-warning shadow-lg rounded-3"
      style={{ width: "18rem", margin: "10px" }}
    >
      <div className="card-body text-center">
        <h5 className="card-title text-warning">{characterName}</h5>
      </div>
      <ul className="list-group list-group-flush bg-dark border-top border-bottom border-secondary">
        <li className="list-group-item bg-dark text-light border-secondary">
          <strong>Hair color:</strong> {characterHairColor}
        </li>
        <li className="list-group-item bg-dark text-light border-secondary">
          <strong>Eyes color:</strong> {characterEyesColor}
        </li>
        <li className="list-group-item bg-dark text-light border-secondary">
          <strong>Gender:</strong> {characterGender}
        </li>
      </ul>
      <div className="card-body d-flex justify-content-around align-items-center">
        <button
          onClick={onLearnMore}
          className="btn btn-outline-light text-warning"
        >
          Learn More
        </button>
        <button
          onClick={onFavorite}
          className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-secondary'}`}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;