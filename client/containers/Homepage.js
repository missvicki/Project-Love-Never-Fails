/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
