import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actionText: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
    color: "#bbccb8",
    marginTop: 24,
  },

  containerLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },

  apresentation: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#bbccb8",
    marginBottom: 24,
  },

  textInput: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#518F57",
    marginBottom: 10,
    borderRadius: 16,
  },

  resetPassword: {
    color: "#bbccb8",
    fontSize: 16,
    fontWeight: "bold",
  },

  actionLogin: {
    backgroundColor: "#518F57",
    borderRadius: 20,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },

  actionTextlogin: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ffff",
  },
});
