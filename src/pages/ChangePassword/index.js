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
      <TextInput
        style={styles.textInput}
        placeholder="Senha Atual"
        secureTextEntry
      />
      <TextInput
        style={styles.textInput}
        placeholder="Nova Senha"
        secureTextEntry
      />
      <TextInput
        style={styles.textInput}
        placeholder="Repetir Nova Senha"
        secureTextEntry
      />
      <Text style={styles.description}>
        Se vc esqueceu sua senha, você pode recuperar via{" "}
        <Text style={{ fontWeight: "bold" }}>E-mail</Text>
      </Text>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SALVAR ALTERAÇÕES </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
