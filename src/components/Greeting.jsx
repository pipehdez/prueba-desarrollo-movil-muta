import { StyleSheet, View } from "react-native";
import CustomText from "../components/CustomText";
import Card from "./Card";

const Greeting = () => {
  return (
    <Card style={styles.container}>
      <CustomText text="Buenas tardes mutante," color="#767676" />
      <CustomText
        text="jeffrey Saavedra"
        color="white"
        fontWeight="600"
        fontSize={18}
      />
    </Card>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    gap: 10,
  },
});
