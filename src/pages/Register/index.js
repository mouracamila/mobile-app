import React, { useState, useContext } from "react";
import { View, Image, TextInput, Text, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../contexts/AuthProvider";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Register() {
  const { signUp } = useAuthContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();

  async function handleSignUp() {
    if (isEnabled) {
      await signUp({
        name,
        email,
        password,
        passwordRepeat,
      });
    }
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Text style={styles.actionText}> Voltar para Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerRegister}>
        <Text style={styles.apresentation}>CRIANDO CONTA</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.textInput}
          placeholder="Repetir Senha"
          value={passwordRepeat}
          onChangeText={setPasswordRepeat}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.actionRegister}
          activeOpacity={isEnabled ? 0.5 : 1}
          onPress={handleSignUp}
        >
          <Text style={styles.actionTextregister}>CRIAR CONTA</Text>
        </TouchableOpacity>

        <View style={styles.termsOfuse}>
          <TouchableOpacity>
            <Text style={styles.actionText}> Aceitar Temos de uso</Text>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: "#767577", true: "#bbccb8" }}
            thumbColor={isEnabled ? "#518F57" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}
