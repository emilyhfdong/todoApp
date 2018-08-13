import React, { Component } from "react";
import { connect } from "react-redux";
import { editToDo, deleteToDo, completeToDo } from "../../actions/todoActions.js";

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      title: this.props.todo.title,
      description: this.props.todo.description,
      dueDate: this.props.todo.dueDate,
      status: this.props.todo.status
    }
  }
  editToDo = () => {
    this.setState({...this.state, editMode: true})
  }
  deleteToDo = () => {
    this.props.deleteToDo(this.props.todo.id)
  }
  completeToDo = () => {
    this.props.completeToDo(this.props.todo.id)
    this.setState({
      ...this.state,
      status: this.props.todo.status
    })
  }
  handleChange = (ev) => {
    const newState = this.state
    newState[ev.target.name] = ev.target.value
    this.setState(newState)
  }
  submitForm = (ev) => {
    ev.preventDefault()
    const editedTodo = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
      status: this.state.status,
      id: this.props.todo.id
    }
    this.props.editToDo(editedTodo)
    this.setState({
      ...this.state,
      editMode: false
    })
  }

  render() {
    return (
      <div className={`todoItem ${this.state.status === false ? ("pending"):("completed")}`}>
        {this.state.editMode === false ? (
          <div className="displayMode">
            <p className="title">{this.state.title}</p>
            <div className="hoveredContent">
              <p className="description">{this.state.description}</p>
              <p className="dueDate">{this.state.dueDate}</p>
              <p className="status">{this.state.status === false ? ("Pending"):("Completed")}</p>
              <button className="todoBtn" onClick={this.editToDo}><i className="fa fa-edit"></i></button>
              <button className="todoBtn" onClick={this.deleteToDo}><i className="fa fa-trash"></i></button>
              {this.state.status === false &&
                <button className="todoBtn" onClick={this.completeToDo}><i className="fa fa-check"></i></button>
              }
            </div>
          </div>
          ):(
          <div className="editMode">
            <input
              className="titleInput"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <input
              className="descriptionInput"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <input
              className="dueDateInput"
              onFocus={e => (e.currentTarget.type = "date")}
              onBlur={e => (e.currentTarget.type = "text")}
              value={this.state.dueDate}
              placeholder="due date"
              type="text"
              name="dueDate"
              onChange={this.handleChange}
            />
            <button className="submitEdit" onClick={this.submitForm}>SUBMIT</button>
          </div>
          )}
      </div>
    )
  }
}


export default connect(
    null,
    { editToDo, deleteToDo, completeToDo },
)(TodoItem);