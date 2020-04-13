import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuthContext } from "./contexts/AuthProvider";

const AppStack = createStackNavigator();

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdList from "./pages/AdList";
import AdDetail from "./pages/AdDetail";
import SellerProfile from "./pages/SellerProfile";
import FavoritesAd from "./pages/FavoritesAd";
import MyAds from "./pages/MyAds";
import CreateAd from "./pages/CreateAd";
import Account from "./pages/Account";
import CreateSellerProfile from "./pages/CreateSellerProfile";

export default function Routes() {
  const { auth, dispatch } = useAuthContext();

  console.log(auth);

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={auth.isLoggedIn ? "AdList" : "Login"}
      >
        {auth.isLoggedIn ? (
          <>
            <AppStack.Screen name="AdList" component={AdList} />
            <AppStack.Screen name="AdDetail" component={AdDetail} />
            <AppStack.Screen name="SellerProfile" component={SellerProfile} />
            <AppStack.Screen name="FavoritesAd" component={FavoritesAd} />
            <AppStack.Screen name="MyAds" component={MyAds} />
            <AppStack.Screen name="CreateAd" component={CreateAd} />
            <AppStack.Screen name="Account" component={Account} />
            <AppStack.Screen
              name="CreateSellerProfile"
              component={CreateSellerProfile}
            />
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
