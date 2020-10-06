import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RatesScreen from "../screens/RatesScreen";
const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Rates"
          options={{
            title: "Rates",
          }}
          component={RatesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
