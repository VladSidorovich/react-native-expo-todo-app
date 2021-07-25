import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppButton } from "../components/ui/AppButton";
import { AppCard } from "../components/ui/AppCard";
import { AppTextBold } from "../components/ui/AppTextBold";
import { THEME } from "../theme";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { ITodo } from "../MainLayout";

interface ITodoScreen {
  goBack: any;
  onRemove: any;
  onSave: any;
  todo: ITodo | undefined;
}

export const TodoScreen = ({ goBack, todo, onRemove, onSave }: ITodoScreen) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title: string) => {
    onSave(todo?.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        onSave={saveHandler}
        value={todo?.title}
        visible={modal}
        onCancel={() => setModal(false)}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo?.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
            <AntDesign name="back" size={20} color="rgb(255, 255, 255)" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo?.id)}
          >
            {" "}
            <FontAwesome
              name="remove"
              size={20}
              color="rgb(255, 255, 255) "
            />{" "}
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
