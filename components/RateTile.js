import React, { useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";
import CurrencyAvatar from "./CurrencyAvatar";

const RateTile = ({ to, to_long, value, id, mainCurrencyValue }) => {
  const finalValue = useMemo(() => mainCurrencyValue * value, [
    value,
    mainCurrencyValue,
  ]);
  return (
    <View style={styles.container} key={id}>
      <CurrencyAvatar currency={to} />
      <View style={styles.valueContainer}>
        <Text numberOfLines={1} style={styles.longText}>
          {to_long}
        </Text>
        <Text numberOfLines={1} style={styles.valueText}>
          {finalValue.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default RateTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  valueContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
  },
  valueText: {
    fontSize: 16,
    fontWeight: "500",
  },
  longText: {
    fontSize: 14,
    fontWeight: "500",
    flex: 0.8,
  },
});
