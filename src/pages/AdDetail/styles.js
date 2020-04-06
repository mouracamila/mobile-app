import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight +20,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  announcement:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 5,
    marginTop: 24, 
  },

  announcementProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 16,
  },

  announcementValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },
  
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 2,
  },

  localDescription:{
    fontSize: 15,
    color: "#737380",
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#518F57',
    borderRadius: 8,
    height: 45,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }

})