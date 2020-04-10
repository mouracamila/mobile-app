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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380" />
        </TouchableOpacity>
        <Text>minha conta</Text>
        <TouchableOpacity>
          <Feather name="more-vertical" size={28} color="#737380" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.announcementMore}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Text style={styles.apresentation}>Configurações de conta</Text>
          <Text>Gerencie informações sobre você e sua conta em geral.</Text>
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
          <Text>Legal</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Licença</Text>
        </TouchableOpacity>

        <View>
          <Text>Feira Local Versão</Text>
          <Text>1.0.0</Text>
        </View>

        <Text>Log out</Text>
      </ScrollView>
    </View>
  );
}
