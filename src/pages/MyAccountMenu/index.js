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
      <ScrollView
        style={styles.announcementMore}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={styles.alignIcons}
            onPress={() => navigateToCreateSellerProfile()}
          >
            <Feather name="edit-3" size={20} color="#000000" />
            <Text style={styles.apresentation}>
              Criar/editar conta de anunciante
            </Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 28 }}>
            Edite seu nome, telefone, email e endereço.
          </Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={styles.alignIcons}
            onPress={() => navigateToMyAds()}
          >
            <Feather name="grid" size={20} color="#000000" />
            <Text style={styles.apresentation}>Configurar meus Anuncios</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 28 }}>Gerencie seu anuncios</Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={styles.alignIcons}
            onPress={() => navigateToEditAccounts()}
          >
            <Feather name="user" size={20} color="#000000" />
            <Text style={styles.apresentation}>Configurações pessoais</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 28 }}>
            Edite seu nome, telefone, email e endereço.
          </Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={styles.alignIcons}
            onPress={() => navigateToChangePassword()}
          >
            <Feather name="lock" size={20} color="#000000" />
            <Text style={styles.apresentation}>Segurança</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 28 }}>
            Mude sua senha e tenha outras ações para proteger sua conta.
          </Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={styles.alignIcons}
            // onPress={() => navigateToChangePassword()}
          >
            <Feather name="map-pin" size={20} color="#000000" />
            <Text style={styles.apresentation}>Localização</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 28 }}>Gerencie sua Localização.</Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={styles.alignIcons}
            // onPress={() => navigateToChangePassword()}
          >
            <Feather name="bell" size={20} color="#000000" />
            <Text style={styles.apresentation}>Notificações</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 28 }}>
            Decida como o Feira local poderá se comunicar com você.
          </Text>
        </View>

        <View style={styles.about}>
          <TouchableOpacity onPress={() => navigateToTermsOfUse()}>
            <Text style={{ marginVertical: 2, marginTop: 40 }}>
              Termos de Uso
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToAboutUs()}>
            <Text style={{ marginVertical: 2 }}>Sobre Nós</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToGuidelines()}>
            <Text style={{ marginVertical: 2 }}>Diretrises</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToLegal()}>
            <Text style={{ marginVertical: 2 }}>Legal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logOut} onPress={() => signOut()}>
            <Text style={{ marginRight: 5 }}>Log out</Text>
            <Feather name="log-out" size={16} color="#000000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
