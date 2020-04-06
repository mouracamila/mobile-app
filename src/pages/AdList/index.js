import React from 'react';
import Feather from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import fotoImg from '../..assets/foto.png';

import styles from './styles';

export default function AdList(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 anucios</Text>.
        </Text>
      </View>

      <Text style={styles.title}> Bem Vindo! </Text>
      <Text style={styles.description}>Entre em contato com o vendedor 
      clicando no anuncio </Text>

      <View style={styles.announcementList}>
        <View style={styles.announcement}>
          <Image source={fotoImg} />

          
          <Text style={styles.announcementValue}>Tomates</Text>

         
          <Text style={styles.announcementValue}>Tomates</Text>

          
          <Text style={styles.announcementValue}>R$ 5,00</Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => {}}
          >
            <Text style={styles.detailsButtonText}>Ver Mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#518F57"/>
          </TouchableOpacity>


        </View>

      </View>

    </View>
  );
}