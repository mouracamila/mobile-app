import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import styles from "./styles";

export default function ChangePassword() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.announcementMore}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ fontSize: 22, marginVertical: 20 }}>
          Diretrizes da Plataforma
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
