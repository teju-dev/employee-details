import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/Textinput";
import SelectInput from "../common/SelectInput";

const employeeForm = ({
  employees,
  states,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  console.log(employees)
  return (
    <form onSubmit={onSave}>
      <h2>{employees.id ? "Editing " : "Adding"} Employee</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="firstName"
        label="FirstName"
        value={employees.firstName}
        onChange={onChange}
        error={errors.firstName}
      />

      <TextInput
        name="lastName"
        label="LastName"
        value={employees.lasteName}
        onChange={onChange}
        error={errors.lasteName}
      />
      <TextInput
        name="email"
        label="EMAIL"
        value={employees.email}
        onChange={onChange}
        error={errors.email}
      />


      <SelectInput
        name="stateId"
        label="State"
        value={employees.stateId || ""}
        defaultOption="Select State"
        options={states.map(state => ({
          value: state.id,
          text: state.name
        }))}
        onChange={onChange}
        error={errors.state}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}

      </button>
    </form>
  );
};

employeeForm.propTypes = {
  states: PropTypes.array.isRequired,
  employees: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default employeeForm;
