import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import Announcement from "../../components/Announcement";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function AdList() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate("AdDetail");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 anucios</Text>.
        </Text>
      </View>

      <Text style={styles.title}> Bem Vindo! </Text>
      <Text style={styles.description}>
        Entre em contato com o vendedor clicando no anuncio{" "}
      </Text>

      <FlatList
        data={[1, 2, 3]}
        style={styles.announcementList}
        keyExtractor={(announcement) => String(announcement)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.announcementList}>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Announcement item={{ title: "Tomate" }} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
