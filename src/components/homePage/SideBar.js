import React, { Component } from "react";
import { connect } from "react-redux";

class SideBar extends Component {


  render() {
    return (
      <div className="sideBar">
        <p>ALL TASKS</p>
        <p>ANOTHER CATEGORY</p>
      </div>
    )
  }
}




export default connect(
    null,
    null,
)(SideBar);