import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import {loadEmployee , saveEmployee} from "../../redux/actions/employeeActions";
import {loadStates} from "../../redux/actions/statesAction";
import PropTypes from "prop-types";
import EmployeeForm from "./EmployeeForm";
import {newEmployee} from "../../../tools/mockData";

//import Spinner from "../common/Spinner";
//import { toast } from "react-toastify";

function ManageEmployeePage ({
  employee,
  states,
   loadEmployee,
   loadStates,
   saveEmployee,
   ...props}){

  const [employees,setEmployee]=useState({...props.employees});
  const [errors]=useState({});
 
  useEffect(() =>{
   if (employee.length==0){
   loadEmployee().catch(error => {
     alert("loading employee failed" +error);
   });
  }else{
     setEmployee({...props.employees})
   }
  if(states.length==0){
   loadStates().catch(error => {
    alert("loading employee failed" +error);
  });
 }
},[props.employees]);

function handleChange(event) {
  const { name, value } = event.target;
  setEmployee(prevEmployee => ({
    ...prevEmployee,
    [name]: name === "stateId" ? parseInt(value, 10) : value
  }));
}
function handleSave(event) {
  event.preventDefault();
  saveEmployee(employees)
  .then(() => {
   history.push("/employee");
  
  });
}

    return (
      <EmployeeForm 
      employees={employees}
       errors={errors} 
       states={states}
       onChange={handleChange}
       onSave={handleSave}
      /> 

    );
  }


ManageEmployeePage.propTypes = {
  employees:PropTypes.object.isRequired,
  employee: PropTypes.array.isRequired,
  states:PropTypes.array.isRequired,
  loadEmployee: PropTypes.func.isRequired,
  loadStates: PropTypes.func.isRequired,
  saveEmployee:PropTypes.func.isRequired
};
export function getEmployeeBySlug(employee, id) {
  return employee.find((employees => employees.id === id)) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.id;
  const employees =
    slug && state.employee.length > 0
      ? getEmployeeBySlug(state.employee, parseInt(slug, 10))
      : newEmployee;
  return {
   employees,
    employee: state.employee,
    states: state.states
  };
}

const mapDispatchToProps = {
  loadEmployee,
  loadStates,
  saveEmployee
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageEmployeePage);


