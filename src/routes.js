import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Register from "./pages/Register";
import AdList from "./pages/AdList";
import AdDetail from "./pages/AdDetail";
import SellerProfile from "./pages/SellerProfile";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="AdList" component={AdList} />
        <AppStack.Screen name="AdDetail" component={AdDetail} />
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="SellerProfile" component={SellerProfile} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
