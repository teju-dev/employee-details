import * as type from "./actionTypes";
import * as employeeApi from "../../api/employeeApi";

export function createEmployee(employee) {
  return { type: type.CREATE_EMPLOYEE, employee};
}
export function loadEmployeeSuccess(employee) {
  return { type: type.LOAD_EMPLOYEE_SUCCESS, employee };
}
export function deleteEmployeeOptimistic(employee) {
  return { type: type.DELETE_EMPLOYEE_OPTIMISTIC, employee };
}
export function createEmployeeSuccess(employee) {
  return { type: type.CREATE_EMPLOYEE_SUCCESS, employee};
}

export function updateEmployeeSuccess(employee) {
  return { type: type.CREATE_EMPLOYEE_SUCCESS, employee };
}

export function loadEmployee()
 {
  return function(dispatch) {
       return employeeApi
      .getEmployee()
      .then(employee => {
        dispatch(loadEmployeeSuccess(employee));
      })
      .catch(error =>{
        throw error
      });
  };
  
}

export function saveEmployee(employees) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return employeeApi
      .saveEmployee(employees)
      .then(savedEmployees => {
        employees.id
          ? dispatch(updateEmployeeSuccess(savedEmployees))
          : dispatch(createEmployeeSuccess(savedEmployees));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteEmployee(employees) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteEmployeeOptimistic(employees));
    return employeeApi.deleteEmployee(employees.id);
  };
}
