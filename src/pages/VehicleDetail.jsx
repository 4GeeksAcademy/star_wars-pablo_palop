import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import characterService from "../service/characterService.js";

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await characterService.getVehicleDetails(id);
        if (data.result && data.result.properties) {
          setVehicle(data.result.properties);
        } else {
          setError("Vehicle details not found.");
        }
      } catch (err) {
        console.error("Error fetching vehicle details:", err);
        setError("Failed to load vehicle details.");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-dark text-light d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
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

  if (!vehicle) {
    return (
      <div className="bg-dark text-light d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-info" role="alert">
          Vehicle not found.
        </div>
        <Link to="/" className="btn btn-warning ms-3">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="card bg-secondary text-light border border-primary shadow-lg p-4 mb-4">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="card-body">
                <h1 className="card-title text-primary mb-3">{vehicle.name}</h1>
                <p className="card-text">
                  <strong>Model:</strong> {vehicle.model} <br />
                  <strong>Manufacturer:</strong> {vehicle.manufacturer} <br />
                  <strong>Cost in credits:</strong> {vehicle.cost_in_credits} <br />
                  <strong>Length:</strong> {vehicle.length} meters <br />
                  <strong>Max Atmosphering Speed:</strong> {vehicle.max_atmosphering_speed} <br />
                  <strong>Crew:</strong> {vehicle.crew} <br />
                  <strong>Passengers:</strong> {vehicle.passengers} <br />
                  <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity} kg <br />
                  <strong>Consumables:</strong> {vehicle.consumables} <br />
                  <strong>Vehicle Class:</strong> {vehicle.vehicle_class}
                </p>
                <Link to="/" className="btn btn-outline-primary mt-3">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;