export const initialStore=()=>{
  return{
    people: [],
    vehicles: [],
    planets: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'SET_PEOPLE':
      return {...store, people: action.payload};
    case 'SET_VEHICLES':
      return {...store, vehicles: action.payload};
    case 'SET_PLANETS':
      return {...store, planets: action.payload};
    
    case 'TOGGLE_FAVORITE':
      const exists = store.favorites.some(
        fav => fav.uid === action.payload.uid && fav.type === action.payload.type
      );
      if (exists) {
        return {
          ...store,
          favorites: store.favorites.filter(
            fav => !(fav.uid === action.payload.uid && fav.type === action.payload.type)
          )
        };
      } else {
        return {
          ...store,
          favorites: [...store.favorites, action.payload]
        };
      }
      
    default:
      throw Error('Unknown action.');
  }    
}
