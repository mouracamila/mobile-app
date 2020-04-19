import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function ChangePassword() {
  const navigation = useNavigation();
  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Nome</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Seu Nome"
        secureTextEntry
      />

      <Text style={{ color: "#bbccb8" }}>
        Personal Information Provide your personal information, even if the
        account is used for a business, a pet or something else. This won't be a
        part of your public profile.
      </Text>

      <Text style={styles.description}>E-mail</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Exemple@exemple.com"
        secureTextEntry
      />
      <Text style={styles.description}>Telefone para contato</Text>
      <TextInput
        style={styles.textInput}
        placeholder="666 666 666"
        secureTextEntry
      />

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SALVAR ALTERAÇÕES </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.desativateAccount}>
          Disabilitar a conta temporatiamente{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
