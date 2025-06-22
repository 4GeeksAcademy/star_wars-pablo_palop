import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; 
import characterService from "../service/characterService.js";

const CharacterDetail = () => {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await characterService.getPersonDetails(id);
        if (data.result && data.result.properties) {
          setCharacter(data.result.properties);
        } else {
          setError("Character details not found.");
        }
      } catch (err) {
        console.error("Error fetching character details:", err);
        setError("Failed to load character details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-dark text-light d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dark text-light d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
        <Link to="/" className="btn btn-warning ms-3">Go back to Home</Link>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="bg-dark text-light d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-info" role="alert">
          Character not found.
        </div>
        <Link to="/" className="btn btn-warning ms-3">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="card bg-secondary text-light border border-warning shadow-lg p-4 mb-4">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="card-body">
                <h1 className="card-title text-warning mb-3">{character.name}</h1>
                <p className="card-text">
                  <strong>Height:</strong> {character.height} cm <br />
                  <strong>Mass:</strong> {character.mass} kg <br />
                  <strong>Hair Color:</strong> {character.hair_color} <br />
                  <strong>Skin Color:</strong> {character.skin_color} <br />
                  <strong>Eye Color:</strong> {character.eye_color} <br />
                  <strong>Birth Year:</strong> {character.birth_year} <br />
                  <strong>Gender:</strong> {character.gender}
                </p>
                <Link to="/" className="btn btn-outline-warning mt-3">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;