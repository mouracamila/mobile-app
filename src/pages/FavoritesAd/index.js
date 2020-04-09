import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import Announcement from "../../components/Announcement";
import Menu from "../../components/Menu";

import logoImg from "../../assets/logo.png";

export default function FavoritesAd() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToDetail() {
    navigation.navigate("AdDetail");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380" />
        </TouchableOpacity>
      </View>
      <Text style={styles.apresentation}>
        Anuncios dos meus vendedores favoritos
      </Text>
      <FlatList
        data={[1, 2, 3]}
        // style={styles.announcementList}
        keyExtractor={(announcement) => String(announcement)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
              onPress={() => navigateToDetail(navigateToDetail)}
            >
              <Announcement item={{ title: "Tomate" }} />
            </TouchableOpacity>
          </View>
        )}
      />
      <Menu />
    </View>
  );
}
