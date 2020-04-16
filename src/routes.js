import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuthContext } from "./contexts/AuthProvider";

const AppStack = createStackNavigator();

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";

export default function Routes() {
  const { auth } = useAuthContext();

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={auth.isLoggedIn ? "Home" : "Login"}
      >
        {auth.isLoggedIn ? (
          <>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="MyAccount" component={MyAccount} />
          </>
        ) : (
          <>
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="Register" component={Register} />
          </>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
