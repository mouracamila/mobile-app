import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./styles";
import Announcement from "../../components/Announcement";
import SellerContact from "../../components/SellerContact";

export default function SellerProfile() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateMore() {}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateMore}>
          <Feather name="more-vertical" size={28} color="#737380" />
        </TouchableOpacity>
      </View>
      <View style={styles.sellerInformation}>
        <Text style={styles.sellerName}>Nome do Vendedor</Text>
        <Text style={styles.sellerCity}>Cidade do vendedor</Text>
      </View>

      <Text style={styles.sellerTags}>ACEITO CARTÕES - ENTREGO </Text>
      <View style={styles.delivery}>
        <Feather name="truck" size={16} color="#000000" />
        <Text style={styles.deliveryText}>Informações de entrega:</Text>
      </View>

      <View style={styles.deliveryInformation}>
        <Text style={styles.deliveryInformationText}>
          Dias que realizo entrega:
        </Text>
        <Text style={styles.deliveryInformationDay}>Seg - Sab</Text>
      </View>

      <Text style={styles.allSellerAnnouncement}>Todos 4 anuncios:</Text>

      <FlatList
        data={[1, 2, 3, 4]}
        style={styles.announcementList}
        keyExtractor={(announcement) => String(announcement)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.announcementList}>
            <Announcement item={{ title: "Tomate" }} />
          </View>
        )}
      />
      <SellerContact item={{ title: "contact" }} />
    </View>
  );
}
