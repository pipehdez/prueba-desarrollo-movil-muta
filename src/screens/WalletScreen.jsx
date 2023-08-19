import { StyleSheet, Text, View } from "react-native";
import Layout from "../theme/Layout";
import CustomText from "../components/CustomText";

const ProfileScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <CustomText text="WalletScreen" fontSize={16} />
      </View>
    </Layout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
