import React, { useState } from "react";
import { View, Image, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuthContext } from "../../contexts/AuthProvider";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import logoImg from "../../assets/logo.png";

import styles from "./styles";
import logoImg from "../../assets/logo.png";

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuthContext();

  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate("Register");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateToRegister}>
          <Text style={styles.actionText}>Criar conta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerLogin}>
        <Text style={styles.apresentation}>Log in</Text>

        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCompleteType="password"
        />

        <TouchableOpacity>
          <Text style={styles.resetPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionLogin}
          onPress={() => signIn({ email, password })}
        >
          <Text style={styles.actionTextlogin}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
