import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight + 10,
  },

  apresentation: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#bbccb8",
    marginVertical: 10,
    flexDirection: "row",
  },

  description: {
    marginVertical: 5,
  },

  textInput: {
    width: "100%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#518F57",
    marginVertical: 5,
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#bbccb8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#ffff",
    fontWeight: "bold",
  },

  desativateAccount: {
    fontWeight: "bold",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 30,
    color: "#bbccb8",
  },
});
