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

  userName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  favoriteSeller: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  myAds: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },

  announcementImg: {
    marginHorizontal: 2,
    width: "35%",
    height: "35%",
    aspectRatio: 2 / 2,
  },

  button: {
    backgroundColor: "#bbccb8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
});
