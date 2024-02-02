import React from "react";
import { connect } from "react-redux";
import * as employeeActions from "../../redux/actions/employeeActions";
import * as statesActions from "../../redux/actions/statesAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import EmployeeList from "./EmployeeList"
//import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import {Redirect} from "react-router-dom";

class EmployeePage extends React.Component {
  state = {
    redirectToAddEmployeePage: false
  
  };
 componentDidMount(){
   this.props.actions.loadEmployee().catch(error => {
     alert("loading employee failed" +error);
   })

   this.props.actions.loadStates().catch(error => {
    alert("loading employee failed" +error);
  })
 }
 handleDeleteEmployee = async employee => {
  toast.success("employee deleted");
  try {
    await this.props.actions.deleteEmployee(employee);
  } catch (error) {
    toast.error("Delete failed. " + error.message, { autoClose: false });
  }
};

 
  render() {
    return (
      <>
       {this.state.redirectToAddEmployeePage && <Redirect to="/employees" />}
        <h2>Employee</h2>
        
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddEmployeePage: true })}
        >ADD EMPLOYEES</button>
        <EmployeeList
        onDeleteClick={this.handleDeleteEmployee}
        employee ={this.props.employee} />
     </> 
    );
  }
}

EmployeePage.propTypes = {
  employee: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    employee: 
    state.states.length === 0
        ? []
        :
    state.employee.map(employee =>{
      return{
        ...employee,
      statesName:state.states.find(a=> a.id ===employee.stateId).name
      
      }
    }),
    states:state.states
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadEmployee: bindActionCreators(employeeActions.loadEmployee, dispatch),
      loadStates: bindActionCreators(statesActions.loadStates, dispatch),
      deleteEmployee: bindActionCreators(employeeActions.deleteEmployee, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeePage);
