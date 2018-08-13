import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSortBy } from "../../actions/todoActions.js";


class SortingButtons extends Component {
  changeSort = (event) => {
    this.props.changeSortBy(event.target.dataset.method)
  }
  render() {
    return (
      <div className="sortingButtons">
        <button
          className={`sortingButton ${this.props.currentMethod === "dueDate" ? ("selectedMethod"):("notSelectedMethod")}`}
          data-method="dueDate"
          onClick={this.changeSort}>
          Due Date
        </button>
        <button
          className={`sortingButton ${this.props.currentMethod === "status" ? ("selectedMethod"):("notSelectedMethod")}`}
          data-method="status"
          onClick={this.changeSort}>
          Status
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    currentMethod: state.todo.sortingMethod
});


export default connect(
    mapStateToProps,
    { changeSortBy },
)(SortingButtons);