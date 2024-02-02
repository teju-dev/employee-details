import { combineReducers } from "redux";
import employee from "./employeeReducer";
import states from "./stateReducer"

const rootReducer = combineReducers({
  employee,
  states
});

export default rootReducer;
