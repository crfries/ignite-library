const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};


//here we set the payloads from the action and set the case for each state. empty arrays are set as initial state to prevent the return of undefined

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return { ...state, searched: [] };
    default:
      return { ...state };
  }
};

export default gamesReducer;
