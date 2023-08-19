import { Text } from "react-native";
import React from "react";

const CustomText = ({
  text,
  color = "white",
  fontSize = 14,
  fontWeight = "400",
  textAlign = "left",
  style = {},
}) => {
  return (
    <Text
      style={[
        style,
        {
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight,
          textAlign: textAlign,
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default CustomText;
