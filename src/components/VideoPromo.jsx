import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { BlurView } from "expo-blur";
import Card from "./Card";

const VideoPromo = () => {
  const loadVideo = () => {
    console.log("Cargando video");
  };

  return (
    <Card>
      <Image
        source={{
          uri: "https://mutaworld.com/wp-content/uploads/2023/03/siembra-manglares-2.jpg",
        }}
        style={styles.imageVideoPromo}
      />
      <View style={styles.contentVideoPromoText}>
        <BlurView intensity={1} style={styles.blur}>
          <View style={{ marginTop: 20 }}>
            <CustomText text="Conoce nuestra" fontWeight="700" fontSize={16} />
            <CustomText text="FUERZA MUTANTE" fontWeight="700" fontSize={20} />
          </View>
          <TouchableOpacity onPress={loadVideo} style={styles.iconPlay}>
            <Image
              source={require("../../assets/play.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </BlurView>
      </View>
    </Card>
  );
};

export default VideoPromo;

const styles = StyleSheet.create({
  imageVideoPromo: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  contentVideoPromoText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
  },
  blur: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 150,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  iconPlay: {
    backgroundColor: "#C8C8C8",
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 15,
    height: 15,
  },
});
