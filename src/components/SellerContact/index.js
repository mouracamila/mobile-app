import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";

export default function SellerContact(props) {
  const { item } = props;

  const message =
    "Olá Ricardo, estou entrando em contato pois estou interessada em seus tomates.";

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
  );
}
