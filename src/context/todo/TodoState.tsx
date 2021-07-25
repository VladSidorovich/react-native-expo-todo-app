import React, { useReducer } from "react";
import { ADD_TODO, UPDATE_TODO } from "../types";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

export const TodoState = ({ children }: any) => {
  const initState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initState);

  const addTodo = (title: string) =>
    dispatch({
      type: ADD_TODO,
      title,
    });

  const removeTodo = (id: string) =>
    dispatch({
      type: ADD_TODO,
      id,
    });

  const updateTodo = (id: string, title: string) =>
    dispatch({
      type: UPDATE_TODO,
      id,
      title,
    });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
