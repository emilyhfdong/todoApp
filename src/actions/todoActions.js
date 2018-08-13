import {
    POST_TODO,
    EDIT_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    CHANGE_SORT_BY,
    CREATE_CATEGORY
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

export const completeToDo = (todoID) => dispatch => {
  dispatch({
    type: COMPLETE_TODO,
    payload: todoID
  });
};

export const changeSortBy = (method) => dispatch => {
  dispatch ({
    type: CHANGE_SORT_BY,
    payload: method
  })
}

export const createCategory = (category) => dispatch => {
  dispatch ({
    type: CREATE_CATEGORY,
    payload: category
  })
}

