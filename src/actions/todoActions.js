import {
    POST_TODO,
} from "./types";

export const postToDo = (todo) => dispatch => {
  dispatch({
    type: POST_TODO,
    payload: todo
  });
};