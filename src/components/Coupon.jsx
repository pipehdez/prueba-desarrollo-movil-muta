import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Card from "./Card";
import CustomText from "./CustomText";

const Coupon = () => {
  return (
    <Card style={styles.constainer}>
      <CustomText text='$15.000 EN TOM NOODLESHOP' color="#D6F64E" fontWeight="500" fontSize={15} />
      <CustomText text='Muestra este cupón y obtén tu beneficio' fontSize={12.5} />
      <CustomText text='25D1-WLCU-EX9F-UTILIZADO' fontSize={17} />
      <CustomText text='* Téndras 60 días para redimirlo - Válido solo presencial' fontSize={10} />
    </Card>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "#171717",
    padding: 15,
    gap: 4,
  },
});
