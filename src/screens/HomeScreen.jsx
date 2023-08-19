import { StyleSheet } from "react-native";
import Greeting from "../components/Greeting";
import VideoPromo from "../components/VideoPromo";
import Coupon from "../components/Coupon";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import Layout from "../theme/Layout";
import ButonRecycle from "../components/ButonRecycle";

const HomeScreen = () => {
  return (
    <Layout>
      <Greeting />
      <VideoPromo />
      <Card style={styles.contentText}>
        <CustomText text="Lo nuevo" fontSize={16} />
      </Card>
      <Coupon />
      <ButonRecycle />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentText: {
    paddingTop: 15,
    paddingBottom: 20,
  },
});
