import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const FavoritesScreen = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container">
      <h2>Favorites</h2>
      {store.favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {store.favorites.map((item, index) => {
            const commonProps = {
              key: item.uid,
              onFavorite: () => {}, // Opcional: puedes añadir lógica para quitar favoritos aquí
              onLearnMore: () => console.log("Learn more", item.uid),
              isFavorite: true
            };

            if (item.type === "people") {
              const CharacterCard = require("../components/characterCard.jsx").default;
              return (
                <CharacterCard
                  {...commonProps}
                  characterName={item.properties.name}
                  characterGender={item.properties.gender}
                  characterHairColor={item.properties.hair_color}
                  characterEyesColor={item.properties.eye_color}
                />
              );
            } else if (item.type === "planets") {
              const PlanetCard = require("../components/planetCard.jsx").default;
              return (
                <PlanetCard
                  {...commonProps}
                  planetName={item.properties.name}
                  planetClimate={item.properties.climate}
                  planetPopulation={item.properties.population}
                  planetGravity={item.properties.gravity}
                />
              );
            } else if (item.type === "vehicles") {
              const VehicleCard = require("../components/vehicleCard.jsx").default;
              return (
                <VehicleCard
                  {...commonProps}
                  vehicleName={item.properties.name}
                  vehicleCrew={item.properties.crew}
                  vehiclePassengers={item.properties.passengers}
                  vehicleSpeed={item.properties.max_atmosphering_speed}
                />
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default FavoritesScreen;
