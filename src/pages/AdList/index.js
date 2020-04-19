import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

import api from "../../services/api";

import styles from "./styles";

import Announcement from "../../components/Announcement";

import logoImg from "../../assets/logo.png";

export default function AdList() {
  const navigation = useNavigation();

  // States
  const [announcements, setAnnouncements] = useState([]);

  async function loadData() {
    const userToken = await AsyncStorage.getItem("userToken");
    await api
      .get("advertisements", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(({ data }) => {
        setAnnouncements(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  function navigateToDetail(announcement) {
    navigation.navigate("AdDetail", { announcement });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={{ fontWeight: "bold" }}>0 anucios</Text>
        </Text>
      </View>

      <FlatList
        data={announcements}
        style={styles.announcementList}
        keyExtractor={(announcement) => String(announcement.id)}
        showsVerticalScrollIndicator={false}
        renderItem={(announcement) => (
          <View style={styles.announcementList}>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(announcement)}
            >
              <Announcement item={announcement} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
