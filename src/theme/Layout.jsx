import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Content = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      {children}
      <StatusBar style="light" />
    </View>
  );
};

const Layout = ({ children }) => {
  return (
    <SafeAreaProvider>
      <Content>{children}</Content>
    </SafeAreaProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
});
