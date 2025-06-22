import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import characterService from "../service/characterService.js";

const PlanetDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await characterService.getPlanetDetails(id);
        if (data.result && data.result.properties) {
          setPlanet(data.result.properties);
        } else {
          setError("Planet details not found.");
        }
      } catch (err) {
        console.error("Error fetching planet details:", err);
        setError("Failed to load planet details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlanetDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-dark text-light d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-info" role="status">
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

  if (!planet) {
    return (
      <div className="bg-dark text-light d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-info" role="alert">
          Planet not found.
        </div>
        <Link to="/" className="btn btn-warning ms-3">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="card bg-secondary text-light border border-info shadow-lg p-4 mb-4">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="card-body">
                <h1 className="card-title text-info mb-3">{planet.name}</h1>
                <p className="card-text">
                  <strong>Diameter:</strong> {planet.diameter} km <br />
                  <strong>Rotation Period:</strong> {planet.rotation_period} hours <br />
                  <strong>Orbital Period:</strong> {planet.orbital_period} days <br />
                  <strong>Gravity:</strong> {planet.gravity} G <br />
                  <strong>Population:</strong> {planet.population} <br />
                  <strong>Climate:</strong> {planet.climate} <br />
                  <strong>Terrain:</strong> {planet.terrain} <br />
                  <strong>Surface Water:</strong> {planet.surface_water}%
                </p>
                <Link to="/" className="btn btn-outline-info mt-3">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;