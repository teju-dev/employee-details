import * as statesApi from "../../api/statesApi";
import * as types from "../actions/actionTypes"

export function loadStatesSuccess(states) {
  return { type: types.LOAD_STATES_SUCCESS, states };
}

export function loadStates() {
  return function(dispatch) {
   // dispatch(beginApiCall());
    return statesApi
      .getStates()
      .then(states => {
        dispatch(loadStatesSuccess(states));
      })
      .catch(error => {
        throw error;
      });
  };
}
