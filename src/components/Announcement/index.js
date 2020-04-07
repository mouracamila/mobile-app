import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

import img from "../../assets/img.png";

export default function Announcement(props) {
  const { item } = props;
  return (
    <View style={styles.announcement}>
      <Image source={img} style={styles.announcementImg} />

      <View style={styles.announcementContent}>
        <Text style={styles.announcementProduct}>{item.title}</Text>
        <Text style={styles.announcementTime}>2 horas atrás</Text>

        <Text style={styles.announcementDescription}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
          distinctio molestias accusamus, ab cupiditate aliquam laborum rerum
          voluptatem ducimus saepe harum explicabo at! Rem reprehenderit,
          necessitatibus corrupti quidem quos perferendis.
        </Text>

        <View style={styles.announcementHowMuch}>
          <Text style={styles.announcementHowMuchProperty}>VALOR:</Text>
          <Text style={styles.announcementHowMuchValue}> R$ 5,00</Text>
          <Text style={styles.announcementHowMuchBy}>/Kg</Text>
        </View>

        <Text style={styles.announcemenTags}>ORGANICO - OUTRA COISA </Text>
      </View>
    </View>
  );
}
