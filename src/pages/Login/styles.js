import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  loginBox: {
    justifyContent: "center",
    alignItems: "center",
  },

  apresentation: {
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 5,
    color: "#bbccb8",
  },

  loginBox: {
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    fontSize: 18,
    color: "#518F57",
    fontWeight: "bold",
  },

  emailBox: {
    backgroundColor: "#bbccb8",
    borderRadius: 20,
    height: 56,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  passwordBox: {
    backgroundColor: "#bbccb8",
    borderRadius: 20,
    height: 56,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  loginPassword: {
    fontSize: 18,
  },

  resetPassword: {
    color: "#bbccb8",
    fontSize: 16,
    fontWeight: "bold",
  },
});
