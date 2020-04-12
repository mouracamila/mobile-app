import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";

export default function Account() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToCreateSellerProfile() {
    navigation.navigate("CreateSellerProfile");
  }

  function navigateToMyAds() {
    navigation.navigate("MyAds");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 22 }}>Minha conta</Text>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.announcementMore}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() =>
            navigateToCreateSellerProfile(navigateToCreateSellerProfile)
          }
        >
          <Text style={styles.apresentation}>Configurações de conta</Text>
          <Text>Gerencie informações sobre você e sua conta em geral.</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToMyAds(navigateToMyAds)}>
          <Text style={styles.apresentation}>Configurar meus Anuncios</Text>
          <Text>Gerencie seu anuncios</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.apresentation}>Configurações pessoais</Text>
          <Text>Edite seu nome, telefone, email e endereço.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.apresentation}>Segurança </Text>
          <Text>
            Mude sua senha e tenha outras ações para proteger sua conta.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.apresentation}>Localização</Text>
          <Text>Gerencie sua Localização.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.apresentation}>Notificações</Text>
          <Text>Decida como o Feira local poderá se comunicar com você.</Text>
        </TouchableOpacity>

        <Text style={styles.apresentation}>About</Text>

        <TouchableOpacity>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>Legal</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>Licença</Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 4 }}>
          <Text style={{ fontWeight: "bold" }}>Feira Local Versão</Text>
          <Text>1.0.0</Text>
        </View>

        <Text style={{ fontWeight: "bold", marginVertical: 4 }}>Log out</Text>
      </ScrollView>
    </View>
  );
}
