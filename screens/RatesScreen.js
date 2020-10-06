import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import useSWR from "swr";
import { fetchRates } from "../api/rates";
import CurrencyAvatar from "../components/CurrencyAvatar";
import RateTile from "../components/RateTile";

const RatesScreen = () => {
  const [value, setValue] = useState(1);
  const { data } = useSWR("/api/rates", fetchRates);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainCurrency}>
          <CurrencyAvatar currency="EUR" />
          <View style={styles.valueContainer}>
            <Text style={styles.mainTextLabel}>Euro</Text>
            <TextInput
              value={value}
              onChangeText={(text) => setValue(text)}
              keyboardType="numeric"
              style={styles.textInput}
            />
          </View>
        </View>
        {!data && <ActivityIndicator />}
        {data?.rates.map((el) => (
          <RateTile mainCurrencyValue={value} {...el} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RatesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  mainCurrency: {
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#FFCB8B",
    backgroundColor: "#fcf2e3",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  scrollView: {
    flex: 1,
  },
  valueContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#f5c488",
    borderBottomWidth: 2,
    width: 110,
    height: 30,
    textAlign: "right",
    padding: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  mainTextLabel: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "500",
  },
});
