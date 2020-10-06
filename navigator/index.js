import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RatesScreen from "../screens/RatesScreen";
import AuthScreen from "../screens/AuthScreen";
const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          options={{
            title: "Sign In",
          }}
          component={AuthScreen}
        />
        <Stack.Screen
          name="Rates"
          options={{
            title: "Rates",
            headerLeft: null
          }}
          component={RatesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
