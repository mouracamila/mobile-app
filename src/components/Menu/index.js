import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Menu() {
  const navigation = useNavigation();

  function navigateToFavoritesAd() {
    navigation.navigate("FavoritesAd");
  }

  function navigateToMyAds() {
    navigation.navigate("MyAds");
  }

  function navigateToCreateAd() {
    navigation.navigate("CreateAd");
  }

  function navigateToAccount() {
    navigation.navigate("Account");
  }

  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menuIcon} onPress={navigateToMyAds}>
        <Feather name="grid" size={20} color="#737380" />
        <Text style={styles.menuText}>Anuncios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuIcon} onPress={navigateToCreateAd}>
        <Feather name="share" size={20} color="#737380" />
        <Text style={styles.menuText}>Anunciar</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.menuIcon}>
        <Feather name="settings" size={20} color="#737380" />
        <Text style={styles.menuText}>Configurações</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.menuIcon} onPress={navigateToFavoritesAd}>
        <Feather name="heart" size={20} color="#737380" />
        <Text style={styles.menuText}>Favoritos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuIcon} onPress={navigateToAccount}>
        <Feather name="user" size={20} color="#737380" />
        <Text style={styles.menuText}>Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
