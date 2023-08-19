import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

const ButonRecycle = () => {
  return (
    <TouchableOpacity
      style={styles.buttonRecycle}
      onPress={() => Alert.alert("Solicitar recolección")}
    >
      <FontAwesome name="recycle" size={20} color="black" />
      <CustomText
        text="Solicitar recolección"
        fontWeight="600"
        fontSize={16}
        color="black"
      />
      <MaterialCommunityIcons
        name="arrow-right-thick"
        size={20}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default ButonRecycle;

const styles = StyleSheet.create({
  buttonRecycle: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    backgroundColor: "#d8fc39",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  }
});
