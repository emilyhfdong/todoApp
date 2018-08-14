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
} from "../actions/types";

function generateRandomString() {
  return Date.now().toString()
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
        id: "1534274840064",
        category: "work",
        subtasks: [
          {id: "1534274978313", task: "make repo", status: false},
          {id: "1534274991595", task: "create-react-app", status: false}
        ]
      },
      {
        title: "style todo list",
        description: "use react SASS",
        dueDate: "2018-08-11",
        status: false,
        id: "1534274963397",
        category: "home",
        subtasks: [
          {id: "1534275000147", task: "look for inspo", status: false},
          {id: "1534275010352", task: "plan ux", status: false}
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
    case POST_TODO: {
      let newTask = action.payload
      newTask.status = false
      newTask.id = generateRandomString()
      newTask.subtasks = []
      let updatedTaskList = sortArray(state.allTodos.concat(newTask), state.sortingMethod)
      return {
        ...state,
        allTodos: updatedTaskList
      }
    }
    case EDIT_TODO: {
      let filteredTaskList = state.allTodos.filter(todo => todo.id !== action.payload.id)
      let editedTask = action.payload
      editedTask.status = false
      editedTask.id = action.payload.id
      let updatedTaskList = sortArray(filteredTaskList.concat(editedTask), state.sortingMethod)
      return {
        ...state,
        allTodos: updatedTaskList
      }
    }
    case DELETE_TODO: {
      return {
        ...state,
        allTodos: state.allTodos.filter(todo => todo.id !== action.payload)
      }
    }
    case COMPLETE_TODO: {
      let filteredTaskList = state.allTodos.filter(todo => todo.id !== action.payload)
      let completedTask = state.allTodos.filter(todo => todo.id === action.payload)[0]
      if (completedTask.status === false) {
        completedTask.status = true
      } else {
        completedTask.status = false
      }
      let updatedTaskList = sortArray(filteredTaskList.concat(completedTask), state.sortingMethod)
      return {
        ...state,
        allTodos: updatedTaskList
      }
    }
    case CHANGE_SORT_BY: {
      let sortedAllArray = sortArray(state.allTodos, action.payload)
      let sortedFiltered = sortArray(state.filteredTodos, action.payload)
      return {
        ...state,
        allTodos: sortedAllArray,
        filteredTodos: sortedFiltered,
        sortingMethod: action.payload,
      }
    }
    case CREATE_CATEGORY: {
      return {
        ...state,
        categories: state.categories.concat(action.payload)
      }
    }
    case CHANGE_CATEGORY: {
      let filteredTaskList = state.allTodos.filter(todo => todo.category === action.payload)
      if (action.payload === "") {
        filteredTaskList = []
      }
      return {
        ...state,
        filteredTodos: filteredTaskList,
        currentCategory: action.payload
      }
    }
    case DELETE_CATEGORY: {
      let updatedCategoryList = state.categories.filter(category => category !== action.payload)
      let currentCategory = state.currentCategory
      if (currentCategory === action.payload) {
        currentCategory = ""
      }
      let filteredTaskList = state.allTodos.filter(todo => todo.category !== action.payload)
      return {
        ...state,
        categories: updatedCategoryList,
        currentCategory: currentCategory,
        allTodos: filteredTaskList
      }
    }
    case CHANGE_SUBTASK_STATUS: {
      let filteredTaskList = state.allTodos.filter(todo => todo.id !== action.payload.todoId)
      let selectedTask = state.allTodos.filter(todo => todo.id === action.payload.todoId)[0]

      let filteredSubtasks = selectedTask.subtasks.filter(subtask => subtask.id !== action.payload.subtaskId)
      let updatedSubtask = selectedTask.subtasks.filter(subtask => subtask.id === action.payload.subtaskId)[0]

      updatedSubtask.status = action.payload.status
      selectedTask.subtasks = sortArray(filteredSubtasks.concat(updatedSubtask), "id")

      let updatedTaskList = sortArray(filteredTaskList.concat(selectedTask), state.sortingMethod)
      return {
        ...state,
        allTodos: updatedTaskList
      }
    }
    case CREATE_SUBTASK: {
      let filteredTaskList = state.allTodos.filter(todo => todo.id !== action.payload.todoId)
      let selectedTask = state.allTodos.filter(todo => todo.id === action.payload.todoId)[0]
      let newSubtask = {id: generateRandomString(), task: action.payload.subtask, status: false}
      let updatedSubtasklist = sortArray(selectedTask.subtasks.concat(newSubtask), "id")

      selectedTask.subtasks = updatedSubtasklist
      let updatedTaskList = sortArray(filteredTaskList.concat(selectedTask), state.sortingMethod)
      return {
        ...state,
        allTodos: updatedTaskList
      }
    }
    case DELETE_SUBTASK: {
      let filteredTaskList = state.allTodos.filter(todo => todo.id !== action.payload.todoId)
      let selectedTask = state.allTodos.filter(todo => todo.id === action.payload.todoId)[0]

      selectedTask.subtasks = selectedTask.subtasks.filter(subtask => subtask.id !== action.payload.subtaskId)
      let updatedTaskList = sortArray(filteredTaskList.concat(selectedTask), state.sortingMethod)
      return {
        ...state,
        allTodos: updatedTaskList
      }
    }

    default:
      return state;
  }
}