import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Navbar } from "./components/Navbar";
import { TodoContext } from "./context/todo/todoContext";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { THEME } from "./theme";

export interface ITodo {
  id: string;
  title: string;
}

export const MainLayout = () => {
  const todoContext = useContext(TodoContext)
  const [todoId, setTodoId] = useState<string | null>(null);
  const [todos, setTodos] = useState<ITodo[]>([]);

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
      todos={todoContext.todos}
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
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
  },
});
