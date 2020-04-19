import React from "react";
import moment from "moment";
import "moment/min/locales";
import { View, Text, Image } from "react-native";

import styles from "./styles";

export default function Announcement(props) {
  const { item } = props.item;

  moment.locale("pt-br");
  const createdAt = moment(item.created_at).fromNow();

  return (
    <View style={styles.announcement}>
      <Image
        source={{
          uri: "https://www.placecage.com/640/480",
        }}
        style={styles.announcementImg}
      />

      <View style={styles.announcementContent}>
        <Text style={styles.announcementProduct}>{item.title}</Text>
        <Text style={styles.announcementTime}>{createdAt}</Text>

        <Text style={styles.announcementDescription}>{item.description}</Text>

        <View style={styles.announcementHowMuch}>
          <Text style={styles.announcementHowMuchProperty}>VALOR:</Text>
          <Text style={styles.announcementHowMuchValue}> R$ {item.price}</Text>
          <Text style={styles.announcementHowMuchBy}>/{item.price_by}</Text>
        </View>

        <Text style={styles.announcemenTags}>ORGANICO - OUTRA COISA </Text>
      </View>
    </View>
  );
}
