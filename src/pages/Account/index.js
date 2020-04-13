import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";

export default function Account() {
  const navigation = useNavigation();

  function navigateToCreateSellerProfile() {
    navigation.navigate("CreateSellerProfile");
  }

  function navigateToMyAds() {
    navigation.navigate("MyAds");
  }

  function navigateToChangePassword() {
    navigation.navigate("ChangePassword");
  }

  function navigateToEditAccounts() {
    navigation.navigate("EditAccounts");
  }

  function navigateToLegal() {
    navigation.navigate("Legal");
  }

  function navigateToGuidelines() {
    navigation.navigate("Guidelines");
  }

  function navigateToTermsOfUse() {
    navigation.navigate("TermsOfUse");
  }

  function navigateToAboutUs() {
    navigation.navigate("AboutUs");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 22 }}>Minha conta</Text>
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
          <Text style={styles.apresentation}>
            Criar ou editar conta de anunciante
          </Text>
          <Text>
            Crie uma conta de anunciante e/ou gerencie suas informações.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToMyAds(navigateToMyAds)}>
          <Text style={styles.apresentation}>Configurar meus Anuncios</Text>
          <Text>Gerencie seu anuncios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateToEditAccounts(navigateToEditAccounts)}
        >
          <Text style={styles.apresentation}>Configurações pessoais</Text>
          <Text>Edite seu nome, telefone, email e endereço.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateToChangePassword(navigateToChangePassword)}
        >
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

        <TouchableOpacity onPress={() => navigateToAboutUs(navigateToAboutUs)}>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>
            Sobre Nós
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToLegal(navigateToLegal)}>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>Legal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateToTermsOfUse(navigateToTermsOfUse)}
        >
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>
            Termos de Uso
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigateToGuidelines(navigateToGuidelines)}
        >
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>
            Diretrises
          </Text>
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
