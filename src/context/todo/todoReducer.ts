import { ITodo } from "../../MainLayout"
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types"

export const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now().toString(),
          title: action.title,
        }]
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item: ITodo) => item.id !== action.id)
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) => {
          if (todo.id === action.id) {
            todo.title = action.title;
          }
          return todo;
        })
      }
    default:
      return state
  }
}
