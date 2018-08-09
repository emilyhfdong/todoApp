import {
    POST_TODO,
} from "../actions/types";

function generateRandomString() {
  const lettersAndNums = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
  var str = "";
  for (let i = 0; i < 6; i ++ ) {
    str += lettersAndNums[Math.floor(Math.random() * (61))];
  }
  return str;
}

const initialState = {
    allTodos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_TODO:
      const newTodo = action.payload
      newTodo.status = false
      newTodo.id = generateRandomString()
      return {
        ...state,
        allTodos: state.allTodos.concat(action.payload)
      };
    default:
      return state;
  }
}