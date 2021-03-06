import {
    POST_TODO,
    EDIT_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    CHANGE_SORT_BY,
    CREATE_CATEGORY,
    CHANGE_CATEGORY,
    DELETE_CATEGORY,
    CHANGE_SUBTASK_STATUS,
    CREATE_SUBTASK,
    DELETE_SUBTASK
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

export const changeCategory = (category) => dispatch => {
  dispatch ({
    type: CHANGE_CATEGORY,
    payload: category
  })
}
export const deleteCategory = (category) => dispatch => {
  dispatch ({
    type: DELETE_CATEGORY,
    payload: category
  })
}
export const changeSubTaskStatus = (obj) => dispatch => {
  dispatch ({
    type: CHANGE_SUBTASK_STATUS,
    payload: obj
  })
}

export const createSubtask = (obj) => dispatch => {
  dispatch ({
    type: CREATE_SUBTASK,
    payload: obj
  })
}

export const deleteSubtask = (obj) => dispatch => {
  dispatch ({
    type: DELETE_SUBTASK,
    payload: obj
  })
}





