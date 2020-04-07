import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import { View, Text, TouchableOpacity, Linking } from "react-native";

import styles from "./styles";
import Announcement from "../../components/Announcement";
import { ScrollView } from "react-native-gesture-handler";

export default function AdDetail() {
  const navigation = useNavigation();
  const message =
    "Olá Ricardo, estou entrando em contato pois estou interessada em seus tomates.";

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Produto: Tomate",
      recipients: ["ricardo@luders.com.br"],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+420774398023t=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="more-vertical" size={28} color="#737380" />
        </TouchableOpacity>
      </View>

      <View style={styles.sellerInformation}>
        <TouchableOpacity style={styles.actionMoreInformation}>
          <Text style={styles.sellerName}>Nome do Vendedor</Text>
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
        <Announcement item={{ title: "Tomate" }} />
      </ScrollView>

      <View style={styles.contactBox}>
        <Text style={styles.localDescription}>
          Entre em contato com vendedor:
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
