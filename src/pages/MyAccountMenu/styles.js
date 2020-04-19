import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // paddingTop: Constants.statusBarHeight + 10,
  },

  apresentation: {
    fontSize: 20,
    // marginTop: 16,
    marginLeft: 4,
  },

  logOut: {
    fontWeight: "bold",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 10,
  },

  alignIcons: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },

  about: {
    flexDirection: "column",
    marginStart: 24,
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
});
