import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { connect } from "react-redux";
import "./App.css"

import HomePage from "./components/homePage/HomePage.js"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage/>
      </Provider>
    );
  }
}


export default connect(
    null,
    null
)(App);