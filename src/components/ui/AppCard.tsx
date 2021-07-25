import React from "react";
import { View, StyleSheet } from "react-native";

export const AppCard = (props: any) => {
  return (
    <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  default: {
    borderWidth: 2,
    borderColor: "green",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000", // for ios
    shadowRadius: 2, // for ios
    shadowOpacity: 0.3, // for ios
    shadowOffset: {
      // for ios
      width: 2,
      height: 2,
    },
    backgroundColor: "#fff", // for ios
    borderRadius: 10, // for ios
    elevation: 8, // for anrdoid
  },
});
