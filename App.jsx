import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import WalletScreen from "./src/screens/WalletScreen";
import CollectionScreen from "./src/screens/CollectionScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import CustomText from "./src/components/CustomText";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#171717",
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarLabel: ({ focused, color, size }) => {
            if (route.name === "Home") {
              // name of label
              return <CustomText text="Inicio" fontSize={12} color={color} />;
            } else if (route.name === "Wallet") {
              return <CustomText text="Billetera" fontSize={12} color={color} />;
            } else if (route.name === "Collection") {
              return <CustomText text="Recolecciones" fontSize={12} color={color} />;
            } else if (route.name === "Profile") {
              return <CustomText text="Perfil" fontSize={12} color={color} />;
            }
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return <Feather name="home" size={24} color={color} />;
            } else if (route.name === "Wallet") {
              return <Feather name="credit-card" size={24} color={color} />;
            } else if (route.name === "Collection") {
              return <Feather name="calendar" size={24} color={color} />;
            } else if (route.name === "Profile") {
              return <Feather name="user" size={24} color={color} />;
            }

            // You can return any component that you like here!
            //return <Image source={require('./assets/home.png')} />;
          },
          tabBarActiveTintColor: "#D6F64E",
          tabBarInactiveTintColor: "white",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Collection" component={CollectionScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
