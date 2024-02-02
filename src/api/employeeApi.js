import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/employee";
const baseUrl ="http://localhost:3001/";

export function getEmployee() {
   return fetch(baseUrl+'employee')
    .then(handleResponse)
    .catch(handleError);
}

export function saveEmployee(employees) {
  debugger;
  return fetch( baseUrl+'employee/' + (employees.id || ""), {
    method: employees.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(employees)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteEmployee(employeeId) {
  return fetch(baseUrl +'employee/' + employeeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
