import React, { Component, useContext } from "react";
import { View, Image, TextInput, Text } from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.apresentation}>Log in</Text>
      </View>
      <View style={styles.loginBox}>
        <View style={styles.emailBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Número telefone ou email"
            placeholderTextColor="#ffff"
          />
        </View>

        <View style={styles.passwordBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Add seu password"
            placeholderTextColor="#ffff"
          />
        </View>

        <Text style={styles.resetPassword}>Esqueceu sua senha?</Text>
        <View>
          <Text>Log in</Text>
        </View>
      </View>
    </View>
  );
}
