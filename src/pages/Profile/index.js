import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

import api from "../../services/api";

import { Feather } from "@expo/vector-icons";

import { Avatar } from "react-native-elements";

import styles from "./styles";

export default function Profile() {
  const navigation = useNavigation();

  // States
  const [user, setUser] = useState([]);

  async function loadData() {
    const userToken = await AsyncStorage.getItem("userToken");
    await api
      .get("profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  function navigateToMyAccount() {
    navigation.navigate("MyAccount");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Profile</Text>

        <TouchableOpacity onPress={() => navigateToMyAccount()}>
          <Feather name="settings" size={22} color="#737380" />
        </TouchableOpacity>
      </View>
      <View style={styles.userNamebox}>
        <Text style={styles.userName}>{user.name}</Text>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://www.placecage.com/640/360",
          }}
          showEditButton
        />
      </View>
      <View>
        <Text style={{ fontWeight: "bold", marginTop: 5 }}>Cidade</Text>
        <Text>Nome da cidade</Text>
        <Text style={{ fontWeight: "bold", marginTop: 5 }}>E-mail</Text>
        <Text>{user.email}</Text>
      </View>
      <Text style={{ fontWeight: "bold", marginTop: 16 }}>
        Vendedores Favoritos
      </Text>
      <View style={styles.favoriteSeller}>
        <TouchableOpacity>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: "https://www.placecage.com/360/360",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: "https://www.placecage.com/361/360",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: "https://www.placecage.com/362/360",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: "https://www.placecage.com/364/360",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: "https://www.placecage.com/365/360",
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: "bold", marginTop: 16 }}>Meus anuncios</Text>
      <View style={styles.myAds}>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://www.placecage.com/367/360" }}
            style={styles.announcementImg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://www.placecage.com/368/360" }}
            style={styles.announcementImg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://www.placecage.com/369/360" }}
            style={styles.announcementImg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://www.placecage.com/370/360" }}
            style={styles.announcementImg}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.actionText}>Tornar-se vendedor</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
