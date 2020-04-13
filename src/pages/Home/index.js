import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import AdList from "../AdList";
import FavoritesAd from "../FavoritesAd";
import CreateAd from "../CreateAd";
import Account from "../Account";

export default function Home() {
  const TabDescription = {
    AdList: {
      title: "Anúncios",
      icon: "grid",
    },
    CreateAd: {
      title: "Anúnciar",
      icon: "share",
    },
    FavoritesAd: {
      title: "Favoritos",
      icon: "heart",
    },
    Account: {
      title: "Conta",
      icon: "user",
    },
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const { title, icon } = TabDescription[route.name];
        return {
          title,
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name={icon}
                size={22}
                color={focused ? "#518F57" : "#737380"}
              />
            );
          },
        };
      }}
      tabBarOptions={{
        activeTintColor: "#518F57",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="AdList" component={AdList} />
      <Tab.Screen name="FavoritesAd" component={FavoritesAd} />
      <Tab.Screen name="CreateAd" component={CreateAd} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
