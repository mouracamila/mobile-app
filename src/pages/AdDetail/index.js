import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function AdDetail() {
  const navigation = useNavigation();
  const message = 'Olá Ricardo, estou entrando em contato pois estou interessada em seus tomates.';
  
  function navigateBack(){
    navigation.goBack()  
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Produto: Tomate',
      recipients: ['ricardo@luders.com.br'],
      body: message,
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=+420774398023t=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#737380"/>
        </TouchableOpacity>
        
      </View>
      <View style={styles.announcement}>
        <Text style={styles.announcementValue}>Tomates</Text>
        
        <Text style={styles.announcementValue}>Lorem ipsum dolor sit amet 
          consectetur, adipisicing elit. Aut, distinctio molestias accusamus, 
          ab cupiditate aliquam laborum rerum voluptatem ducimus saepe harum 
          explicabo at! Rem reprehenderit, necessitatibus corrupti quidem quos 
          perferendis.
        </Text>
        
        <Text style={styles.announcementProperty}>VALOR:</Text>
        <Text style={styles.announcementValue}>R$ 5,00</Text>
      </View>
      <View style={styles.contactBox}>
        
        <Text style={styles.localDescription}>Entre em contato com vendedor:</Text>
        
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      
      </View>

    </View>
  );
}