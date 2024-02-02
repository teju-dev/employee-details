import * as types from "../actions/actionTypes";
import initialState from "./initialState";
//import initialState from "./initialState";

export default function stateReducer(state=initialState.states, action) {
  switch (action.type) {
    case types.LOAD_STATES_SUCCESS:
      return action.states;
    default:
      return state;
  }
}
