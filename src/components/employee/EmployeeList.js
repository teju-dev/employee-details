import React from "react";
import PropTypes from "prop-types";
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridApi: '',
      gridColumnApi: '',
      rowData: [],
      currentRow: ''
    }
  }
  modules = AllCommunityModules;

  columnDefs = [
    {
      headerName: 'ID', field: 'id', editable: true,
      cellRenderer: function (params) {
        return '<a href="http://localhost:3000/employees/' + params.value + '" target="_params">' + params.value + '</a>'
      }
    },
    { headerName: 'First Name', field: 'firstName' },
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'States', field: 'statesName' }
  ];
  defaultColDef = {
    filter: true,
    sortable: true
  };
  rowSelection = 'single';

  onGridReady = (params) => {
    this.setState({ gridApi: params.api, gridColumnApi: params.columnApi })
  }

  onSelectionChanged() {
    var selectedRows = this.state.gridApi.getSelectedRows();
    this.setState({ currentRow: selectedRows[1] })
  }

  onCellClicked() {
  }

  deleteRow() {
    this.props.onDeleteClick(this.state.currentRow);
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <button style={{ marginBottom: 20 }} className="btn btn-primary add-course" onClick={this.deleteRow.bind(this)}>Delete</button>
        <div className="ag-theme-balham" style={{ height: '300px', width: '800px' }}>
          <AgGridReact
            modules={this.modules}
            columnDefs={this.columnDefs}
            rowData={this.props.employee}
            rowSelection={this.rowSelection}
            onGridReady={this.onGridReady.bind(this)}
            defaultColDef={this.defaultColDef}
            onSelectionChanged={this.onSelectionChanged.bind(this)}
            onCellClicked={this.onCellClicked.bind(this)}
          >
          </AgGridReact>
        </div>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  employee: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default EmployeeList;