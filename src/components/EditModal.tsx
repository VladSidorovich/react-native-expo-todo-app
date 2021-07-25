import React, {useState} from "react";
import { View, StyleSheet, TextInput, Button, Modal, Alert } from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ visible, onCancel, value, onSave }: any) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    const titleLength = title.trim().length
    if (titleLength < 3) {
      Alert.alert('Ошибка', `Минимальная длина названия - 3 символа. Сейчас ${titleLength} символов`)
    } else {
      onSave(title)
    }

  }

  return (
    <Modal visible={visible} animationType="fade" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите название"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button
            title="Отменить"
            onPress={onCancel}
            color={THEME.DANGER_COLOR}
          />
          <Button
            title="Сохранить"
            onPress={saveHandler}
            color={THEME.MAIN_COLOR}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
