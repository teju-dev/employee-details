import * as types from "../actions/actionTypes";
import initialSate from "./initialState";

export default function employeeReducer(state = initialSate.employee, action) {
  switch (action.type) {
    case types.CREATE_EMPLOYEE:
      return [...state, { ...action.employee }];
      case types.UPDATE_EMPLOYEE_SUCCESS:
        return [...state, { ...action.employees }];
      case types.CREATE_EMPLOYEE_SUCCESS:
        return state.map(employees =>
          employees.id === action.employees.id ? action.employees : employees
        );
      case types.LOAD_EMPLOYEE_SUCCESS:
        return action.employee;
        case types.DELETE_EMPLOYEE_OPTIMISTIC:
      return state.filter(employee => employee.id !== action.employee.id);
    default:
      return state;
  }
}
