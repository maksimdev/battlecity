import initMap from '../initMap';

const defaultState = {
  map: initMap()
};

export function mapReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}