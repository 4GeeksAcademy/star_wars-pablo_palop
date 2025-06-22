import React from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../components/characterCard.jsx";
import PlanetCard from "../components/planetCard.jsx";
import VehicleCard from "../components/vehicleCard.jsx";

export const FavoritesScreen = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate(); 

  const handleToggleFavorite = (item) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: item });
  };

  const handleLearnMore = (item) => {
    navigate(`/${item.type}/${item.uid}`);
  };

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-warning mb-4 text-center">Your Favorites</h2>

        {store.favorites.length === 0 ? (
          <p className="text-center lead">
            No favorites yet. Start adding some from the Home page!
          </p>
        ) : (
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {store.favorites.map((item, index) => {

              if (item.type === "people") {
                return (
                  <CharacterCard
                    key={item.uid}
                    characterName={item.properties.name}
                    characterGender={item.properties.gender}
                    characterHairColor={item.properties.hair_color}
                    characterEyesColor={item.properties.eye_color}
                    isFavorite={true}
                    onFavorite={() => handleToggleFavorite(item)}
                    onLearnMore={() => handleLearnMore(item)}
                  />
                );
              } else if (item.type === "planets") {
                return (
                  <PlanetCard
                    key={item.uid}
                    planetName={item.properties.name}
                    planetClimate={item.properties.climate}
                    planetPopulation={item.properties.population}
                    planetGravity={item.properties.gravity}
                    isFavorite={true}
                    onFavorite={() => handleToggleFavorite(item)}
                    onLearnMore={() => handleLearnMore(item)}
                  />
                );
              } else if (item.type === "vehicles") {
                return (
                  <VehicleCard
                    key={item.uid}
                    vehicleName={item.properties.name}
                    vehicleCrew={item.properties.crew}
                    vehiclePassengers={item.properties.passengers}
                    vehicleSpeed={item.properties.max_atmosphering_speed}
                    isFavorite={true}
                    onFavorite={() => handleToggleFavorite(item)}
                    onLearnMore={() => handleLearnMore(item)}
                  />
                );
              }

              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesScreen;