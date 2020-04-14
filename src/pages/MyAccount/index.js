//Create internal routes/Navigation

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import { Container } from './styles';

import MyAccountMenu from "../MyAccountMenu";
import CreateSellerProfile from "../CreateSellerProfile";
import MyAds from "../MyAds";
import EditAccounts from "../EditAccounts";
import ChangePassword from "../ChangePassword";
import Guidelines from "../Guidelines";
import TermsOfUse from "../TermsOfUse";
import AboutUs from "../AboutUs";

const AccountStack = createStackNavigator();

export default function MyAccount() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Minha conta" component={MyAccountMenu} />
      <AccountStack.Screen
        name="CreateSellerProfile"
        component={CreateSellerProfile}
      />
      <AccountStack.Screen name="MyAds" component={MyAds} />
      <AccountStack.Screen name="EditAccounts" component={EditAccounts} />
      <AccountStack.Screen name="ChangePassword" component={ChangePassword} />
      <AccountStack.Screen name="Guidelines" component={Guidelines} />
      <AccountStack.Screen name="TermsOfUse" component={TermsOfUse} />
      <AccountStack.Screen name="AboutUs" component={AboutUs} />
    </AccountStack.Navigator>
  );
}
