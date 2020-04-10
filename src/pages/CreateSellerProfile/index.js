import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Switch } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "react-native-button";

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

export default function CreateSellerProfile() {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  function navigateBack() {
    navigation.goBack();
  }

  function navigateMore() {}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 22 }}>Conta de anunciante</Text>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.description}>Seu Nome</Text>
        <TextInput style={styles.textInput} placeholder="Nome" />

        <Text style={styles.description}>Seu endereço</Text>

        <View style={styles.boxAdress}>
          <View>
            <Text style={styles.endereço}>Cep</Text>
            <TextInput style={styles.adressInput} placeholder="000 000" />
          </View>

          <View>
            <Text style={styles.endereço}>Cidade</Text>
            <TextInput
              style={styles.adressInput}
              placeholder="Adicione sua cidade"
            />
          </View>

          <View>
            <Text style={styles.endereço}>UF</Text>
            <TextInput style={styles.adressInput} placeholder="LF" />
          </View>
        </View>

        <Text style={styles.description}>Numero do celular</Text>
        <TextInput style={styles.textInput} placeholder="000 000 000 000" />

        <Text style={styles.description}>Seu email</Text>
        <TextInput style={styles.textInput} placeholder="exemplo@exemplo.com" />

        <Text style={styles.description}>Informação sobre pagamento</Text>
        <View style={styles.actionsTags}>
          <TouchableOpacity style={styles.actionTag}>
            <Text style={styles.textTag}>DINHEIRO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionTag}>
            <Text style={styles.textTag}>CARTÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionTag}>
            <Text style={styles.textTag}>OUTROS</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>Informação Sobre entrega</Text>
        <View style={styles.actionsTags}>
          <TouchableOpacity style={styles.actionTag}>
            <Text style={styles.textTag}>ENTREGO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionTag}>
            <Text style={styles.textTag}>NÃO ENTREGO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionTag}>
            <Text style={styles.textTag}>OUTROS</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>Dias que entrego</Text>
        <View style={styles.actionsTagsDays}>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>Segunda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>Terça</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>Quarta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsTagsDays}>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>Quinta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>Sexta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>Sabado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>Domingo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.termsOfuse}>
          <Text>Aceitar </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold" }}> regras de conduta</Text>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: "#767577", true: "#bbccb8" }}
            thumbColor={isEnabled ? "#518F57" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={{ color: "#fff" }}>SALVAR</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
