import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import EmployeePage from "./employee/EmployeeePage";
import ManageEmployeePage from "./employee/ManageEmployeePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/employee" component={EmployeePage} />
        <Route path="/employees/:id" component={ManageEmployeePage} />
        <Route path="/employees" component={ManageEmployeePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
