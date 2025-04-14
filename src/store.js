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
    

      
    default:
      throw Error('Unknown action.');
  }    
}
