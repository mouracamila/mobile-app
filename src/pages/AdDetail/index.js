import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import Announcement from "../../components/Announcement";
import SellerContact from "../../components/SellerContact";

import { ScrollView } from "react-native-gesture-handler";

export default function AdDetail({ route }) {
  const navigation = useNavigation();
  const { announcement } = route.params;
  const seller = announcement.item.user;

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToSellerProfile() {
    navigation.navigate("SellerProfile");
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
        <TouchableOpacity
          style={styles.actionMoreInformation}
          onPress={() => navigateToSellerProfile(navigateToSellerProfile)}
        >
          <Text style={styles.sellerName}>{seller.name}</Text>
        </TouchableOpacity>
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

      <ScrollView
        style={styles.announcementMore}
        showsVerticalScrollIndicator={false}
      >
        <Announcement item={announcement} />

        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigateToSellerProfile(navigateToSellerProfile)}
        >
          <Text style={styles.detailsButtonText}>
            Ver mais anuncios desse vendedor
          </Text>
          <Feather name="arrow-right" size={16} color="#737380" />
        </TouchableOpacity>
      </ScrollView>

      <SellerContact item={announcement} />
    </View>
  );
}
