import {
    POST_TODO,
    EDIT_TODO,
    DELETE_TODO
} from "./types";

export const postToDo = (todo) => dispatch => {
  dispatch({
    type: POST_TODO,
    payload: todo
  });
};

export const editToDo = (todo) => dispatch => {
  dispatch({
    type: EDIT_TODO,
    payload: todo
  });
};

export const deleteToDo = (todoID) => dispatch => {
  dispatch({
    type: DELETE_TODO,
    payload: todoID
  });
};