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
    <div className="card shadow-sm" style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body text-center">
        <h5 className="card-title">{characterName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Hair color:</strong> {characterHairColor}</li>
        <li className="list-group-item"><strong>Eyes color:</strong> {characterEyesColor}</li>
        <li className="list-group-item"><strong>Gender:</strong> {characterGender}</li>
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

export default CharacterCard;
