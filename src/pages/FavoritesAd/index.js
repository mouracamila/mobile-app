import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import Announcement from "../../components/Announcement";

export default function FavoritesAd() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate("AdDetail");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 22 }}>Vendedores Favoritos</Text>
      </View>
      <FlatList
        data={[1, 2, 3]}
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
    </View>
  );
}
