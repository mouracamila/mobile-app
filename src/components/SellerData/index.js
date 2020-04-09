import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function SellerData(props) {
  const { seller } = props;
  return (
    <View>
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
    </View>
  );
}
