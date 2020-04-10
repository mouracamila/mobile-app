import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "react-native-button";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";

import styles from "./styles";
import img from "../../assets/img.png";

export default function CreateAd(props) {
  const [isEnabled, setIsEnabled] = useState(false);

  const navigation = useNavigation();

  function toggleSwitch() {
    setIsEnabled((previousState) => !previousState);
  }

  function navigateBack() {
    navigation.goBack();
  }

  function onPublish() {
    if (isEnabled) {
      alert("hey");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="more-vertical" size={28} color="#737380" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.apresentation}>Criando anuncio</Text>
        <View>
          <Image source={img} style={styles.announcementImg} />
        </View>
        <View style={styles.addPhoto}>
          <Feather name="camera" size={25} color="#ffff" />
          <Text style={styles.addPhotoText}>Adicionar foto ao anuncio</Text>
        </View>
        <Text style={styles.description}>O que você está anuncinado?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nome do produto"
          // value={name}
          // onChangeText={setName}
        />
        <Text style={styles.description}>
          Descreva o que você está anunciando
        </Text>
        <TextInput
          style={styles.textInputDescription}
          placeholder="Caracteristicas do produto. Ex: Dia de coleita, fabricação etc.."
          multiline={true}
          textAlignVertical="top"
          // maxLength="10" Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.
          // value={name}
          // onChangeText={setName}
        />
        <Text style={styles.description}>Adicione o valor</Text>
        <View style={styles.actions}>
          <TextInput
            style={styles.textInputValue}
            placeholder="0,00"
            textAlignVertical="center"
            // value={name}
            // onChangeText={setName}
          />
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>Unidade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>kg</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>Litro</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>
          Selecione Tags que definam seu produto
        </Text>
        <View style={styles.actionsTags}>
          <TouchableOpacity style={styles.actionTag}>
            <Text style={styles.textTag}>ORGANICO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionTag}>
            <Text style={styles.textTag}>ARTESANAL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionTag}>
            <Text style={styles.textTag} multiline={true}>
              AGRICULTURA FAMILIAR
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userTerms}>
          <Text>
            Esse anuncio não infringe os termos de uso da aplicação feira local
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold" }}>
              ler mais sobre os termos de uso
            </Text>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: "#767577", true: "#bbccb8" }}
            thumbColor={isEnabled ? "#518F57" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <TouchableOpacity onPress={onPublish}>
          <View style={styles.button}>
            <Text style={styles.actionText}>PUBLICAR</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
