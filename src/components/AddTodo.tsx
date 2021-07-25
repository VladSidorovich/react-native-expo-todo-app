import React, {useState} from "react";
import { StyleSheet, TextInput, View, Alert, Keyboard } from "react-native";
import { THEME } from "../theme";
import {AntDesign} from '@expo/vector-icons'

interface IAddTodo {
  onSubmit: any
}

export const AddTodo = ({ onSubmit }: IAddTodo) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
      Keyboard.dismiss()
    } else {
      Alert.alert('Введите название задачи')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput 
        style={styles.input as any} 
        value={value}
        onChangeText={setValue}
        placeholder={"Введите название задачи"}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <AntDesign.Button 
        name="pluscircleo"
        onPress={pressHandler} 
      > 
        Добавить
      </AntDesign.Button>
      {/* <Button 
        onPress={pressHandler} 
        title="Добавить"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
   padding: 10,
   width: '60%',
   borderStyle: 'solid',
   borderBottomWidth: 2,
   borderBottomColor: THEME.MAIN_COLOR,

  },
  text: {
    color: "rgb(255, 255, 255)",
    fontSize: 18,
  },
});
