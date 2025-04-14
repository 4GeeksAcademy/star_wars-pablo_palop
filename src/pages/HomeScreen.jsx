import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import characterService from "../services/characterService.js";
import CharacterCard from "../components/CharacterCard.jsx"; // Asegúrate que el nombre del archivo esté bien

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
      <h2>Characters</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {store.people.map((char) => (
          <CharacterCard
            key={char.uid}
            characterName={char.name}
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
          <CharacterCard
            key={planet.uid}
            characterName={planet.name}
            characterGender={"N/A"}
            characterHairColor={planet.properties.climate}
            characterEyesColor={planet.properties.population}
            onFavorite={() => dispatch({ type: "TOGGLE_FAVORITE", payload: { ...planet, type: "planets" } })}
            onLearnMore={() => console.log("Learn more", planet.uid)}
          />
        ))}
      </div>

      <h2>Vehicles</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {store.vehicles.map((vehicle) => (
          <CharacterCard
            key={vehicle.uid}
            characterName={vehicle.name}
            characterGender={"N/A"}
            characterHairColor={vehicle.properties.model}
            characterEyesColor={vehicle.properties.passengers}
            onFavorite={() => dispatch({ type: "TOGGLE_FAVORITE", payload: { ...vehicle, type: "vehicles" } })}
            onLearnMore={() => console.log("Learn more", vehicle.uid)}
          />
        ))}
      </div>
    </div>
  );
};
