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
    borderBottomColor: "#518F57",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },

  description: {
    marginVertical: 8,
    fontWeight: "bold",
  },

  textInput: {
    width: "100%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#518F57",
    marginBottom: 10,
    borderRadius: 10,
  },

  boxAdress: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  adressInput: {
    width: "auto",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#518F57",
    marginBottom: 10,
    borderRadius: 16,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionsTags: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },

  actionTag: {
    backgroundColor: "#bbccb8",
    borderRadius: 16,
    height: 35,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },

  actionsTagsDays: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 8,
  },

  tagDay: {
    backgroundColor: "#bbccb8",
    borderRadius: 16,
    height: 35,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 8,
  },

  textTag: {
    color: "#FFF",
    padding: 4,
  },

  termsOfuse: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    marginVertical: 10,
  },

  button: {
    backgroundColor: "#bbccb8",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
});
