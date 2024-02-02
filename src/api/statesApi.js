import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/states";

export function getStates() {
  return fetch(baseUrl )
    .then(handleResponse)
    .catch(handleError);
}
