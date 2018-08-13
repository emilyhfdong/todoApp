import {
    POST_TODO,
    EDIT_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    CHANGE_SORT_BY,
    CREATE_CATEGORY
} from "../actions/types";

function generateRandomString() {
  const lettersAndNums = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
  var str = "";
  for (let i = 0; i < 6; i ++ ) {
    str += lettersAndNums[Math.floor(Math.random() * (61))];
  }
  return str;
}

const sortArray = (array, method) => {
  const compare = (a, b) => {
    if (a[method] < b[method]) {
      return -1;
    } else {
      return 1;
    }
  }
  return array.slice(0).sort(compare)
}

const initialState = {
    allTodos: [
      {
        title: "make todo list",
        description: "use react to create it",
        dueDate: "2018-08-10",
        status: false,
        id: generateRandomString(),
        category: "work"
      },
      {
        title: "style todo list",
        description: "use react SASS",
        dueDate: "2018-08-11",
        status: false,
        id: generateRandomString(),
        category: "home"
      },
    ],
    sortingMethod: "dueDate",
    categories: ["work", "home", "school"]
};



export default function(state = initialState, action) {
  switch (action.type) {
    case POST_TODO:
      const newTodo = action.payload
      newTodo.status = false
      newTodo.id = generateRandomString()
      const newTodos = sortArray(state.allTodos.concat(newTodo), state.sortingMethod)
      return {
        ...state,
        allTodos: newTodos
      };
    case EDIT_TODO:
      const newTodoList = state.allTodos.filter(todo => todo.id !== action.payload.id)
      const editedTodo = action.payload
      editedTodo.status = false
      editedTodo.id = action.payload.id
      const editedTodos = sortArray(newTodoList.concat(editedTodo), state.sortingMethod)
      return {
        ...state,
        allTodos: editedTodos
      }
    case DELETE_TODO:
      return {
        ...state,
        allTodos: state.allTodos.filter(todo => todo.id !== action.payload)
      }
    case COMPLETE_TODO:
      const filteredTodoList = state.allTodos.filter(todo => todo.id !== action.payload)
      let completedTodo = state.allTodos.filter(todo => todo.id === action.payload)[0]
      completedTodo.status = true
      const updatedTodos = sortArray(filteredTodoList.concat(completedTodo), state.sortingMethod)
      return {
        ...state,
        allTodos: updatedTodos
      }
    case CHANGE_SORT_BY: {
      const sortedArray = sortArray(state.allTodos, action.payload)
      return {
        ...state,
        allTodos: sortedArray,
        sortingMethod: action.payload
      }
    }
    case CREATE_CATEGORY: {
      return {
        ...state,
        categories: state.categories.concat(action.payload)
      }
    }
    default:
      return state;
  }
}