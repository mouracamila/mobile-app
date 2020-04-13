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

  apresentation: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#bbccb8",
    marginVertical: 10,
    flexDirection: "row",
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
});
