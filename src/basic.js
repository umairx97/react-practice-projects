import { createStore, combineReducers } from "redux";

// Reducer
function Todo(state = { name: "Umair" }, action) {
  // Checks agains action.type
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        text: "TODO_ADDED"
      };

    case "DELETE_TODO":
      return {
        ...state,
        text: "TODO_DELETED"
      };

    default:
      return state;
  }
}

function User(state = { name: "Umair" }, action) {
  // Checks against action.type
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        text: "USER_ADDED"
      };

    case "DELETE_USER":
      return {
        ...state,
        text: "USER_DELETED"
      };

    default:
      return state;
  }
}

// Combine Reducers
const rootReducer = combineReducers({
  Todo,
  User
});

const store = createStore(rootReducer, {});

// Dispatching action to reducer


export default store;
