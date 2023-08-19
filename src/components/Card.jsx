import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
        {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: 'transparent'
  },
});
