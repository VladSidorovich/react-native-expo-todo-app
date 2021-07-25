import { ITodo } from "../../MainLayout"
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types"
import { ITodoState } from "./todoContext";

const handlers = {
  [ADD_TODO]: (state: ITodoState, { title }: ITodo) => ({
    ...state,
    todos: [...state.todos, {
      id: Date.now().toString(),
      title,
    }]
  }),
  [REMOVE_TODO]: (state: ITodoState, { id }: ITodo) => ({
    ...state,
    todos: state.todos.filter((item: ITodo) => item.id !== id)
  }),
  [UPDATE_TODO]: (state: ITodoState, { id, title }: ITodo) => ({
    ...state,
    todos: state.todos.map((todo: ITodo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    })
  }),
  DEFAULT: (state: ITodoState) => state
}

export const todoReducer = (state: any, action: any) => {
  const handler = (handlers as any)[action.type] || handlers.DEFAULT
  return handler(state, action)
}
