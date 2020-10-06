import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const AuthScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Rates")}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  loginBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#3d74cb",
    borderRadius: 5,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
  },
});
