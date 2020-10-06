import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CurrencyAvatar = ({ currency }) => {
  return (
    <View style={styles.container}>
      <Text>{currency}</Text>
    </View>
  );
};

export default CurrencyAvatar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    overflow: 'hidden',
    backgroundColor: '#FFAD32'
  },
});
