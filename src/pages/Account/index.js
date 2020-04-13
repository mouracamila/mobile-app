import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useAuthContext } from "../../contexts/AuthProvider";

import styles from "./styles";

export default function Account() {
  const { signOut } = useAuthContext();
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
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.announcementMore}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity onPress={() => navigateToCreateSellerProfile()}>
          <Text style={styles.apresentation}>
            Criar ou editar conta de anunciante
          </Text>
          <Text>
            Crie uma conta de anunciante e/ou gerencie suas informações.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToMyAds()}>
          <Text style={styles.apresentation}>Configurar meus Anuncios</Text>
          <Text>Gerencie seu anuncios</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToEditAccounts()}>
          <Text style={styles.apresentation}>Configurações pessoais</Text>
          <Text>Edite seu nome, telefone, email e endereço.</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToChangePassword()}>
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

        <TouchableOpacity onPress={() => navigateToAboutUs()}>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>
            Sobre Nós
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToLegal()}>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>Legal</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToTermsOfUse()}>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>
            Termos de Uso
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToGuidelines()}>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>
            Diretrises
          </Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 4 }}>
          <Text style={{ fontWeight: "bold" }}>Feira Local Versão</Text>
          <Text>1.0.0</Text>
        </View>

        <TouchableOpacity onPress={() => signOut()}>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
