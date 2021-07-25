import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContext";
import { ITodo } from "../MainLayout";
import { THEME } from "../theme";

interface IMainScreen {
  todos: ITodo[];
  removeTodo: any;
  addTodo: any;
  openTodo: Function;
}

export const MainScreen = () => {
  const { addTodo, removeTodo, todos } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext)

  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
  );

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    };
    Dimensions.addEventListener("change", update);
    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  return (
    <View style={{ width: deviceWidth }}>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo onOpen={changeScreen} todo={item} removeTodo={removeTodo} />
        )}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
};
