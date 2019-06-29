/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "../containers/Homepage";

const Routes = () => (
  <Router>
    <div>
      <Route path="/" exact component={Homepage} />
    </div>
  </Router>
);
export default Routes;
