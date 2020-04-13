import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function ChangePassword() {
  const navigation = useNavigation();
  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 22 }}>Sobre Nós</Text>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.announcementMore}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ fontSize: 22, marginVertical: 20 }}>
          Lorem ipsum dolor sit
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          minus nemo itaque quae repellat vitae voluptatibus atque numquam
          quisquam sit architecto dolores temporibus fuga sint perspiciatis, a
          incidunt quas qui
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          minus nemo itaque quae repellat vitae voluptatibus atque numquam
          quisquam sit architecto dolores temporibus fuga sint perspiciatis, a
          incidunt quas qui
        </Text>
      </ScrollView>
    </View>
  );
}
