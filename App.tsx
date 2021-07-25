import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { THEME } from "./src/theme";

async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export interface ITodo {
  id: string;
  title: string;
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState<string | null>(null);
  const [todos, setTodos] = useState<ITodo[]>([]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err: any) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  const addTodo = (title: string) => {
    setTodos((prevTodos: ITodo[]) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id: string) => {
    const selectedTodo = todos.find((todo) => todo.id === id);

    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить ${selectedTodo?.title}`,
      [
        {
          text: "Отмена",
          style: "cancel",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Удалить",
          onPress: () => {
            setTodos((prev: ITodo[]) => prev.filter((item) => item.id !== id));
            setTodoId(null);
          },
          style: "destructive",
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  const openTodo = (id: string) => {
    setTodoId(id);
  };

  const goBack = () => {
    setTodoId(null);
  };

  const updateTodo = (id: string, title: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      });
    });
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={openTodo}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        onSave={updateTodo}
        goBack={goBack}
        todo={selectedTodo}
        onRemove={removeTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo app" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL
  },
});
