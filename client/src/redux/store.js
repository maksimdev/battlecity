import { createStore, combineReducers } from "redux";

import { controlReducer } from './control';
import { mapReducer } from './map';
 
export const store = createStore(combineReducers({
  map: mapReducer,
  control: controlReducer
}))