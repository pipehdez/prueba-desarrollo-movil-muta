import { StyleSheet, View } from "react-native";
import Layout from "../theme/Layout";
import CustomText from "../components/CustomText";

const CollectionScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <CustomText text="CollectionScreen" fontSize={16} />
      </View>
    </Layout>
  );
};

export default CollectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
