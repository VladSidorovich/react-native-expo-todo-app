import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Navbar } from "./components/Navbar";
import { ScreenContext } from "./context/screen/screenContext";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { THEME } from "./theme";

export interface ITodo {
  id: string;
  title: string;
}

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext) as any;

  return (
    <View>
      <Navbar title="Todo app" />
      <View style={styles.container}>{
        todoId ? <TodoScreen /> :  <MainScreen />
      }</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
  },
});
