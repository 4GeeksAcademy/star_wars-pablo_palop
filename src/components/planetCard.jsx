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
    <div className="card shadow-sm" style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body text-center">
        <h5 className="card-title">{planetName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Climate:</strong> {planetClimate}</li>
        <li className="list-group-item"><strong>Population:</strong> {planetPopulation}</li>
        <li className="list-group-item"><strong>Gravity:</strong> {planetGravity}</li>
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

export default PlanetCard;
