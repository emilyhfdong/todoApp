import {
    POST_TODO,
    EDIT_TODO,
    DELETE_TODO
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
    allTodos: [
      {
        title: "make todo list",
        description: "use react to create it",
        dueDate: "2018-08-10",
        status: false,
        id: generateRandomString()
      },
      {
        title: "style todo list",
        description: "use react SASS",
        dueDate: "2018-08-11",
        status: false,
        id: generateRandomString()
      },
    ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_TODO:
      const newTodo = action.payload
      newTodo.status = false
      newTodo.id = generateRandomString()
      return {
        ...state,
        allTodos: state.allTodos.concat(newTodo)
      };
    case EDIT_TODO:
      let newTodoList = state.allTodos.filter(todo => todo.id !== action.payload.id)
      const editedTodo = action.payload
      editedTodo.status = false
      editedTodo.id = action.payload.id
      return {
        ...state,
        allTodos: newTodoList.concat(editedTodo)
      }
      case DELETE_TODO:
      return {
        ...state,
        allTodos: state.allTodos.filter(todo => todo.id !== action.payload)
      }
    default:
      return state;
  }
}