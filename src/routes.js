import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuthContext } from "./contexts/AuthProvider";

const AppStack = createStackNavigator();

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import SellerProfile from "./pages/SellerProfile";
import AdDetail from "./pages/AdDetail";
import MyAds from "./pages/MyAds";
import CreateSellerProfile from "./pages/CreateSellerProfile";
import ChangePassword from "./pages/ChangePassword";
import EditAccounts from "./pages/EditAccounts";
import Legal from "./pages/Legal";
import Guidelines from "./pages/Guidelines";
import TermsOfUse from "./pages/TermsOfUse";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

export default function Routes() {
  const { auth, dispatch } = useAuthContext();

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={auth.userToken ? "Home" : "Login"}
      >
        {auth.userToken ? (
          <>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="AdDetail" component={AdDetail} />
            <AppStack.Screen name="SellerProfile" component={SellerProfile} />
            <AppStack.Screen name="MyAds" component={MyAds} />
            <AppStack.Screen name="ChangePassword" component={ChangePassword} />
            <AppStack.Screen
              name="CreateSellerProfile"
              component={CreateSellerProfile}
            />
            <AppStack.Screen name="EditAccounts" component={EditAccounts} />
            <AppStack.Screen name="Legal" component={Legal} />
            <AppStack.Screen name="Guidelines" component={Guidelines} />
            <AppStack.Screen name="TermsOfUse" component={TermsOfUse} />
            <AppStack.Screen name="AboutUs" component={AboutUs} />
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
