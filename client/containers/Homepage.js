/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../components/common/Header";

class Homepage extends Component {
  render() {
    return <Header />;
  }
}

export default Homepage;
