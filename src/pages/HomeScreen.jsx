import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import characterService from "../service/characterService.js";
import CharacterCard from "../components/characterCard.jsx";
import PlanetCard from "../components/planetCard.jsx";
import VehicleCard from "../components/vehicleCard.jsx";
import { useNavigate } from "react-router-dom";


export const HomeScreen = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const loadData = async () => {
      try {
        const people = await characterService.getPeople();
        dispatch({ type: 'SET_PEOPLE', payload: people.results });

        const planets = await characterService.getPlanet();
        dispatch({ type: 'SET_PLANETS', payload: planets.results });

        const vehicles = await characterService.getVehicle();
        dispatch({ type: 'SET_VEHICLES', payload: vehicles.results });
      } catch (err) {
        console.error("Error cargando datos de SWAPI", err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <div className="container d-flex align-content-center justify-content-between">
        <div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <button>See favorites</button>
            <button>Read later</button>
          </div>
          <h2>Characters</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {store.people.map((char) => (
              <CharacterCard
                key={char.uid}
                characterName={char.properties.name}
                characterGender={char.properties.gender}
                characterHairColor={char.properties.hair_color}
                characterEyesColor={char.properties.eye_color}
                onFavorite={() => dispatch({ type: "TOGGLE_FAVORITE", payload: { ...char, type: "people" } })}
                onLearnMore={() => console.log("Learn more", char.uid)} // reemplazar con navigate(`/people/${char.uid}`)
              />
            ))}
          </div>

          <h2>Planets</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {store.planets.map((planet) => (
              <PlanetCard
                key={planet.uid}
                planetName={planet.properties.name}
                planetClimate={planet.properties.climate}
                planetPopulation={planet.properties.population}
                planetGravity={planet.properties.gravity}
                onFavorite={() =>
                  dispatch({ type: "TOGGLE_FAVORITE", payload: { ...planet, type: "planets" } })
                }
                onLearnMore={() => console.log("Learn more", planet.uid)}
              />
            ))}
          </div>


          <h2>Vehicles</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {store.vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.uid}
                vehicleName={vehicle.properties.name}
                vehicleCrew={vehicle.properties.crew}
                vehiclePassengers={vehicle.properties.passengers}
                vehicleSpeed={vehicle.properties.max_atmosphering_speed}
                onFavorite={() => dispatch({ type: "TOGGLE_FAVORITE", payload: { ...vehicle, type: "vehicles" } })}
                onLearnMore={() => console.log("Learn more", vehicle.uid)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
