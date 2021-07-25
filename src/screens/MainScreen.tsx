import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { ITodo } from "../MainLayout";
import { THEME } from "../theme";

interface IMainScreen {
  todos: ITodo[];
  removeTodo: any;
  addTodo: any;
  openTodo: Function;
}

export const MainScreen = ({
  addTodo,
  removeTodo,
  todos,
  openTodo,
}: IMainScreen) => {
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
          <Todo onOpen={openTodo} todo={item} removeTodo={removeTodo} />
        )}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
};
