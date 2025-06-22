import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import characterService from "../service/characterService.js";
import CharacterCard from "../components/characterCard.jsx";
import PlanetCard from "../components/planetCard.jsx";
import VehicleCard from "../components/vehicleCard.jsx";
import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const people = await characterService.getPeople();
        dispatch({ type: "SET_PEOPLE", payload: people.results });

        const planets = await characterService.getPlanet();
        dispatch({ type: "SET_PLANETS", payload: planets.results });

        const vehicles = await characterService.getVehicle();
        dispatch({ type: "SET_VEHICLES", payload: vehicles.results });
      } catch (err) {
        console.error("Error cargando datos de SWAPI", err);
      }
    };
    loadData();
  }, []);

  const isFavoriteItem = (item) => {
    return store.favorites.some(
      (fav) => fav.uid === item.uid && fav.type === item.type
    );
  };

  return (
    <div className="bg-dark text-light py-5">
      <div className="container"> 
        <div className="d-flex justify-content-end mb-4">
          <button
            className="btn btn-warning text-dark shadow-sm"
            onClick={() => navigate("/favorites")}
          >
            See favorites ({store.favorites.length})
          </button>
        </div>

        <section className="mb-5 p-4 bg-dark border border-light rounded shadow-lg">
          <h2 className="text-warning mb-4 text-center">Characters</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {store.people.map((char) => (
              <CharacterCard
                key={char.uid}
                characterName={char.properties.name}
                characterGender={char.properties.gender}
                characterHairColor={char.properties.hair_color}
                characterEyesColor={char.properties.eye_color}
                isFavorite={isFavoriteItem({ ...char, type: "people" })}
                onFavorite={() =>
                  dispatch({ type: "TOGGLE_FAVORITE", payload: { ...char, type: "people" } })
                }
                onLearnMore={() => navigate(`/characters/${char.uid}`)}
              />
            ))}
          </div>
        </section>

        <section className="mb-5 p-4 bg-dark border border-light rounded shadow-lg">
          <h2 className="text-info mb-4 text-center">Planets</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {store.planets.map((planet) => (
              <PlanetCard
                key={planet.uid}
                planetName={planet.properties.name}
                planetClimate={planet.properties.climate}
                planetPopulation={planet.properties.population}
                planetGravity={planet.properties.gravity}
                isFavorite={isFavoriteItem({ ...planet, type: "planets" })}
                onFavorite={() =>
                  dispatch({ type: "TOGGLE_FAVORITE", payload: { ...planet, type: "planets" } })
                }
                onLearnMore={() => navigate(`/planets/${planet.uid}`)}
              />
            ))}
          </div>
        </section>

        {/* Bloque de Vehículos */}
        <section className="mb-5 p-4 bg-dark border border-light rounded shadow-lg">
          <h2 className="text-primary mb-4 text-center">Vehicles</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {store.vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.uid}
                vehicleName={vehicle.properties.name}
                vehicleCrew={vehicle.properties.crew}
                vehiclePassengers={vehicle.properties.passengers}
                vehicleSpeed={vehicle.properties.max_atmosphering_speed}
                isFavorite={isFavoriteItem({ ...vehicle, type: "vehicles" })}
                onFavorite={() =>
                  dispatch({ type: "TOGGLE_FAVORITE", payload: { ...vehicle, type: "vehicles" } })
                }
                onLearnMore={() => navigate(`/vehicles/${vehicle.uid}`)}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};