import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import Announcement from "../../components/Announcement";
// import Menu from "../../components/Menu";
import SellerData from "../../components/SellerData";

export default function MyAds() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  const seller = {
    name: "Tomateiro",
  };

  const announcements = [
    {
      id: 1,
      title: "Tomate",
      description: "Tomates verdes sem api",
      price: 1.0,
      price_by: "kg",
    },
    {
      id: 2,
      title: "Tomate",
      description: "Tomates verdes sem api",
      price: 1.0,
      price_by: "kg",
    },
  ];

  function navigateToDetail() {
    navigation.navigate("AdDetail");
  }

  return (
    <View style={styles.container}>
      <SellerData seller={seller} />

      <Text style={styles.apresentation}>
        Anuncios dos meus vendedores favoritos
      </Text>
      <FlatList
        data={announcements}
        // style={styles.announcementList}
        keyExtractor={(announcement) => String(announcement.id)}
        showsVerticalScrollIndicator={false}
        renderItem={(announcement) => (
          <View>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
              onPress={() => navigateToDetail(navigateToDetail)}
            >
              <Announcement item={announcement} />
            </TouchableOpacity>
          </View>
        )}
      />
      {/* <Menu /> */}
    </View>
  );
}
