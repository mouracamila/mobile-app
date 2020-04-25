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
import SellerData from "../../components/SellerData";

export default function MyAds() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

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

  function navigateToDetail() {
    navigation.navigate("AdDetail");
  }

  return (
    <View style={styles.container}>
      {/* <SellerData seller={seller} /> */}
      <FlatList
        data={announcements}
        // style={styles.announcementList}
        keyExtractor={(announcement) => String(announcement.id)}
        showsVerticalScrollIndicator={false}
        renderItem={(announcement) => (
          <View>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
              onPress={() => navigateToDetail(navigateToDetail)}
            >
              <Announcement item={announcement} />
            </TouchableOpacity>
          </View>
        )}
      />
      {/* <Menu /> */}
    </View>
  );
}
