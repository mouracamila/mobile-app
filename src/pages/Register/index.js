import React from "react";
import { View, Image, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

// import background from "../../assets/background";

export default function Register() {
  const [username, setUsername] = React.useState("");
  const [useremail, setUseremail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordRepeat, setPasswordRepeat] = React.useState("");

  const navigation = useNavigation();

  function navigateToList() {
    navigation.navigate("AdList");
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
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          value={useremail}
          onChangeText={setUseremail}
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
          onPress={navigateToList}
        >
          <Text style={styles.actionTextregister}>CRIAR CONTA</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.actionText}> Aceitar Temos de uso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
