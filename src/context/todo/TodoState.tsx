import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import { ITodo } from "../../MainLayout";
import { ScreenContext } from "../screen/screenContext";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

export const TodoState = ({ children }: any) => {
  const { changeScreen } = useContext(ScreenContext);
  const { todos } = useContext(TodoContext);
  const initState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initState);

  const addTodo = (title: string) =>
    dispatch({
      type: ADD_TODO,
      title,
    });

  const removeTodo = (id: string) => {
    const todo = state.todos.find((t: ITodo) => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить ${todo.title}`,
      [
        {
          text: "Отмена",
          style: "cancel",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Удалить",
          onPress: () => {
            changeScreen(null);
            dispatch({
              type: REMOVE_TODO,
              id,
            });
          },
          style: "destructive",
        },
      ],
      {
        cancelable: false,
      }
    );
  };

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
