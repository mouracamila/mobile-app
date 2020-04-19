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

  function navigateMore() {}

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>Nome</Text>
        <TextInput style={styles.textInput} placeholder="Nome comercial" />

        <Text style={styles.description}>Endereço:</Text>

        <View style={styles.boxAdress}>
          <View>
            <Text style={styles.endereço}>Cep</Text>
            <TextInput style={styles.adressInput} placeholder="000 000" />
          </View>

          <View>
            <Text style={styles.endereço}>Cidade</Text>
            <TextInput
              style={styles.adressInput}
              placeholder="Nome da sua cidade"
            />
          </View>

          <View>
            <Text style={styles.endereço}>UF</Text>
            <TextInput style={styles.adressInput} placeholder="UF" />
          </View>
        </View>

        <Text style={styles.description}>Telefone para contato</Text>
        <TextInput style={styles.textInput} placeholder="000 000 000 000" />

        <Text style={styles.description}>Email para contato</Text>
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

        <Text style={styles.description}>Informação sobre entrega</Text>
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
            <Text style={styles.textTag}>SEGUNDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>TERÇA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>QUARTA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsTagsDays}>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>QUINTA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>SEXTA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>SABADO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagDay}>
            <Text style={styles.textTag}>DOMINGO</Text>
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
