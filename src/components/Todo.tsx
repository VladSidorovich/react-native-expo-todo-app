import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppText } from "./ui/AppText";

interface ITodo {
  todo: {
    id: string;
    title: string;
  };
  removeTodo: Function;
  onOpen: Function;
}

export const Todo = ({ todo, removeTodo, onOpen }: ITodo) => {
  const handlePress = (id: string) => {
    onOpen(id)
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => handlePress(todo.id) }
      onLongPress={removeTodo.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
