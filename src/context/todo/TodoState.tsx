import React, { useReducer } from "react";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

export const TodoState = ({ children }: any) => {
  const initState = {
    todos: [
      {
        id: "1",
        title: "test",
      },
    ],
  };

  const [state, dispatch] = useReducer(todoReducer, initState);

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};