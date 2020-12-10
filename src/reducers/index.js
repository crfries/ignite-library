import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";


const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;

//because redux will only allow us to use one reducer, we use combine reducers and import all of the here and export the 'root' reducer to index where our redux store is located