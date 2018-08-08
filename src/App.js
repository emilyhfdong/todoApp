import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { connect } from "react-redux";
import "./App.css"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <p> hi <p>
      </Provider>
    );
  }
}


export default connect(
    null,
    null
)(App);