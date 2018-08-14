import {
    POST_TODO,
    EDIT_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    CHANGE_SORT_BY,
    CREATE_CATEGORY,
    CHANGE_CATEGORY,
    CHANGE_SUBTASK_STATUS
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
        category: "work",
        subtasks: [
          {id: generateRandomString(), task: "make repo", status: false},
          {id: generateRandomString(), task: "create-react-app", status: false}
        ]
      },
      {
        title: "style todo list",
        description: "use react SASS",
        dueDate: "2018-08-11",
        status: false,
        id: generateRandomString(),
        category: "home",
        subtasks: [
          {id: generateRandomString(), task: "look for inspo", status: false},
          {id: generateRandomString(), task: "plan ux", status: false}
        ]
      },
    ],
    filteredTodos: [],
    sortingMethod: "dueDate",
    categories: ["work", "home", "school"],
    currentCategory: ""
};



export default function(state = initialState, action) {
  switch (action.type) {
    case POST_TODO:
      const newTodo = action.payload
      newTodo.status = false
      newTodo.id = generateRandomString()
      newTodo.subtasks = []
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
      if (completedTodo.status === false) {
        completedTodo.status = true
      } else {
        completedTodo.status = false
      }
      const updatedTodos = sortArray(filteredTodoList.concat(completedTodo), state.sortingMethod)
      return {
        ...state,
        allTodos: updatedTodos
      }
    case CHANGE_SORT_BY: {
      const sortedAllArray = sortArray(state.allTodos, action.payload)
      const sortedFiltered = sortArray(state.filteredTodos, action.payload)
      return {
        ...state,
        allTodos: sortedAllArray,
        sortingMethod: action.payload,
        filteredTodos: sortedFiltered
      }
    }
    case CREATE_CATEGORY: {
      return {
        ...state,
        categories: state.categories.concat(action.payload)
      }
    }
    case CHANGE_CATEGORY: {
      let filteredList = state.allTodos.filter(todo => todo.category === action.payload)
      if (action.payload === "") {
        filteredList = []
      }
      return {
        ...state,
        filteredTodos: filteredList,
        currentCategory: action.payload
      }
    }
    case CHANGE_SUBTASK_STATUS: {
      const newTaskList = state.allTodos.filter(todo => todo.id !== action.payload.todoId)
      const selectedTodo = state.allTodos.filter(todo => todo.id === action.payload.todoId)[0]

      const newSubtasks = selectedTodo.subtasks.filter(subtask => subtask.id !== action.payload.subtaskId)
      const updatedSubtask = selectedTodo.subtasks.filter(subtask => subtask.id === action.payload.subtaskId)[0]

      updatedSubtask.status = action.payload.status
      selectedTodo.subtasks = sortArray(newSubtasks.concat(updatedSubtask), "id")


      const updatedList = sortArray(newTaskList.concat(selectedTodo), state.sortingMethod)
      return {
        ...state,
        allTodos: updatedList
      }
    }
    default:
      return state;
  }
}