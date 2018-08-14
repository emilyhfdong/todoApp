import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSubTaskStatus, deleteSubtask } from "../../actions/todoActions.js";

class SubTaskMode extends Component {
  toggleStatus = (ev) => {
    let functionParams = {
      subtaskId: ev.target.dataset.subtaskid,
      todoId: this.props.todoId
    }
    if (ev.target.dataset.status === "false") {
      functionParams.status = true
      this.props.changeSubTaskStatus(functionParams)
    } else {
      functionParams.status = false
      this.props.changeSubTaskStatus(functionParams)

    }
  }
  deleteSubtask = (ev) => {
    let functionParams = {
      subtaskId: ev.target.dataset.subtaskid,
      todoId: this.props.todoId
    }
    this.props.deleteSubtask(functionParams)
  }
  render() {
    const allSubTasks = this.props.subtasks.map(subtask => {
      const icon = subtask.status ? ("checkbox fa fa-check-square-o"):("checkbox fa fa-square-o")
      return (
        <div className="subtask" key={subtask.id}>
          <i onClick={this.toggleStatus} data-status={subtask.status} data-subtaskid={subtask.id} className={icon}></i>
          <i onClick={this.deleteSubtask} data-subtaskid={subtask.id} className="fa fa-trash"></i>
          <p>{subtask.task}</p>
        </div>
      )
    })
    return (
      <div className="subTaskMode">
        {allSubTasks}
      </div>
    )
  }
}



export default connect(
    null,
    { changeSubTaskStatus, deleteSubtask },
)(SubTaskMode);